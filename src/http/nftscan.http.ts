/* eslint-disable no-console */
import axios, { AxiosError } from 'axios';
import { NftscanError } from '../types/nftscan-error';
import { NftscanConfig, NsError } from '../types/nftscan-type';
import { isEmpty } from '../util/common.util';
import NftscanConst from '../util/nftscan.const';

function apiKeyError() {
  const error = new NftscanError(NsError.API_KEY_ERROR, 'The property "apiKey" cannot be empty.');
  console.error(error.msg);
  console.error('To use our APIs, You need to register an account on NFTScan open platform');
  console.error('NFTScan open platform ->', 'https://developer.nftscan.com/');
  return Promise.reject(error);
}

function apiChainError() {
  const error = new NftscanError(NsError.API_CHAIN_ERROR, 'The property "chain" is invalid');
  console.error(error.msg);
  console.error('"chian" must be one of the following strings: [ETH, BNB, MATIC, GLMR, Arbitrum, Optimism]');
  return Promise.reject(error);
}

/**
 * Configure the axios interceptor
 */
export function initHttpConfig() {
  axios.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(new NftscanError(NsError.REQUEST_ERROR, error.message));
    },
  );
  axios.interceptors.response.use(
    (response) => {
      if (response.status !== 200) {
        return Promise.reject(new NftscanError(response.status, response.statusText));
      }

      if (isEmpty(response.data)) {
        return Promise.reject(new NftscanError(NsError.RESPONSE_DATA_EMPTY));
      }

      const { code, msg, data } = response.data;
      if (code !== 200) {
        return Promise.reject(new NftscanError(code, msg));
      }

      return data;
    },
    (error: AxiosError) => {
      return Promise.reject(new NftscanError(error.code, error.message));
    },
  );
}

/**
 * NFTScan SDK's wrapper function of send get http request
 * @param nftscanConfig NFTScan SDK Initialization parameters {@link NftscanConfig}
 * @param url The API url
 * @param params The axios get params
 * @returns Promise
 */
export function nftscanGet<T, V>(nftscanConfig: NftscanConfig, url: string, params?: T): Promise<V> {
  const { apiKey, chain } = nftscanConfig;
  if (isEmpty(apiKey)) {
    return apiKeyError();
  }

  const baseURL = NftscanConst.BASE_URL[chain];
  if (isEmpty(baseURL)) {
    return apiChainError();
  }

  return axios.get(`${baseURL}${url}`, {
    params,
    headers: { 'X-API-KEY': apiKey },
  });
}

/**
 * NFTScan SDK's wrapper function of send post http request
 * @param nftscanConfig NFTScan SDK Initialization parameters {@link NftscanConfig}
 * @param url The API url
 * @param data The axios post data
 * @returns Promise
 */
export function nftscanPost<T, V>(nftscanConfig: NftscanConfig, url: string, data?: T): Promise<V> {
  const { apiKey, chain } = nftscanConfig;
  if (isEmpty(apiKey)) {
    return apiKeyError();
  }

  const baseURL = NftscanConst.BASE_URL[chain];
  if (isEmpty(baseURL)) {
    return apiChainError();
  }

  return axios.post(`${baseURL}${url}`, data, { headers: { 'X-API-KEY': apiKey } });
}
