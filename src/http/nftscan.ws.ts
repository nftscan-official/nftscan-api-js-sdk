import WebSocket from 'isomorphic-ws';
import BaseApi from '../api/base-api';
import { NftscanWsConfig, NsError, NsObject, SubscribeOptions, WSEventType, WSRequest } from '../types';
import { NftscanError } from '../types/nftscan-error';
import { withTimeout } from '../util/common.util';
import NftscanConst from '../util/nftscan.const';

const HEARTBEAT_INTERVAL = 30000;
const HEARTBEAT_WAIT_TIME = 10000;

/**
 * 1、ws未连接-》存储请求
 * 2、连接成功-》发送已存储的请求
 * 3、连接断开后重连
 */
export default class NftscanWS extends BaseApi<NftscanWsConfig> {
  private ws: WebSocket | undefined;

  private heartbeatIntervalId?: NodeJS.Timeout;

  private open = false;

  private id = 0;

  private requests: { [id: string]: WSRequest };

  private subscribes: { [id: string]: WSRequest & NsObject };

  constructor(config: NftscanWsConfig) {
    super(config);
    this.requests = {};
    this.subscribes = {};
    this.initWs();
  }

  private initWs() {
    this.ws = new WebSocket(`${NftscanConst.BASE_URL.ws}${this.config.apiKey}`);
    console.log('new WebSocket:', this.ws);

    this.ws.onerror = (err: any) => {
      this.open = false;
      console.error(`ws err:${this.config.apiKey}`, err);
      setTimeout(() => {
        this.reconnect();
      }, HEARTBEAT_WAIT_TIME);
    };

    this.ws.onclose = (err: any) => {
      console.error(`ws close:${this.config.apiKey}`, err);
      this.open = false;
    };

    this.ws.onmessage = (res: any) => {
      if (!res) {
        return;
      }

      const { data = '{}' } = res;
      const result = JSON.parse(data);

      console.log(`ws received:${this.config.apiKey}`, result);

      if (result.id) {
        const id = String(result.id);
        const request = this.requests[id];
        delete this.requests[id];

        if (request.resolve) {
          request.resolve(result);
        }
      } else {
        const { chain, topic } = result;

        const subscribeListener = this.subscribes[`${topic}_${chain}`];
        if (!subscribeListener || !subscribeListener.resolve) {
          return;
        }

        subscribeListener.resolve(result);
      }
    };

    this.ws.onopen = () => {
      console.log(`ws open:${this.config.apiKey}`, 'success', this.requests);

      this.open = true;
      this.startHeartbeat();

      Object.keys(this.requests).forEach((id) => {
        if (!this.ws) return;
        this.ws.send(JSON.stringify(this.requests[id].payload));
      });
    };
  }

  private startHeartbeat() {
    if (this.heartbeatIntervalId != null) {
      return;
    }
    this.heartbeatIntervalId = setInterval(async () => {
      try {
        await withTimeout(this.send({ event: 'heartbeat' }), HEARTBEAT_WAIT_TIME);
      } catch (error) {
        console.log('---ws send err---', error);

        this.reconnect();
      }
    }, HEARTBEAT_INTERVAL);
  }

  private reconnect() {
    if (this.ws) {
      this.ws.close(1000);
      this.ws = undefined;
    }
    this.initWs();

    Object.keys(this.subscribes).forEach((key) => {
      if (!this.ws) return;
      this.send(this.subscribes[key].payload);
      console.log('subscribes 重试', this.requests);
    });
  }

  async subscribe(options: SubscribeOptions): Promise<string> {
    const { topic, chain, params, listener } = options;
    const payload = { event: WSEventType.SUBSCRIBE, topic, chain, params };

    this.subscribes[`${topic}_${chain}`] = { resolve: listener, payload };

    const { data = '' } = await this.send(payload);

    if (!data || typeof data !== 'string') {
      return Promise.reject(new NftscanError(NsError.WS_NOT_READY));
    }

    this.subscribes[`${topic}_${chain}`] = { ...this.subscribes[`${topic}_${chain}`], subscription: data };

    return data;
  }

  async unsubscribe(subscriptionId: string): Promise<boolean> {
    const { data = false } = await this.send({ event: WSEventType.UNSUBSCRIBE, subscription: subscriptionId });
    if (data) {
      const newSubs: { [id: string]: WSRequest & NsObject } = {};
      Object.keys(this.subscribes).forEach((key) => {
        const value = this.subscribes[key];
        if (value.subscription === subscriptionId) return;
        newSubs[key] = value;
      });
      this.subscribes = newSubs;
      console.log('剩余订阅', this.subscribes);
    }
    return data as boolean;
  }

  send(data?: NsObject): Promise<NsObject> {
    if (!data) {
      return Promise.reject(new NftscanError(NsError.WS_ERROR));
    }

    if (!this.ws) {
      return Promise.reject(new NftscanError(NsError.WS_NOT_READY));
    }

    this.id += 1;

    return new Promise<NsObject>((resolve, reject) => {
      const payload = { ...data, id: this.id };

      this.requests[String(this.id)] = { resolve, reject, payload };

      console.log('存储', this.requests);

      if (this.open && this.ws) {
        console.log('发送', payload);

        this.ws.send(JSON.stringify(payload));
      }
    });
  }
}
