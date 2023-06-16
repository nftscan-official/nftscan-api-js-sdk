import NftscanWS from '../../http/nftscan.ws';
import { NftscanWsConfig, SubscribeOptions } from '../../types';
import BaseApi from '../base-api';

export default class NftscanWs extends BaseApi<NftscanWsConfig> {
  ws: NftscanWS;

  constructor(config: NftscanWsConfig) {
    super(config);
    this.ws = new NftscanWS(config);
  }

  on(options: SubscribeOptions) {
    return this.ws.subscribe(options);
  }

  off(subscriptionId: string) {
    return this.ws.unsubscribe(subscriptionId);
  }
}
