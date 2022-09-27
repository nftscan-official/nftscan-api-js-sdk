import { NsError } from './nftscan-type';

/**
 * NFTScan SDK's wrapper error object
 */
export class NftscanError {
  /**
   * error code
   */
  code: string | number | undefined = '';

  /**
   * error message
   */
  msg = '';

  constructor(code: string | number | undefined, msg?: string) {
    this.code = code;
    this.msg = msg || '';
  }
}

function missingParam(paramName: string) {
  return `The param '${paramName}' is required.`;
}

function invalidParam(paramName: string, extMsg?: string) {
  return `The param '${paramName}' is invalid. ${extMsg || ''}`;
}

export function invalidParamError(paramName: string, extMsg?: string) {
  return Promise.reject(new NftscanError(NsError.PARAM_ERROR, invalidParam(paramName, extMsg)));
}

export function missingParamError(paramName: string) {
  return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam(paramName)));
}

export function invalidLimitError(max: number) {
  return Promise.reject(new NftscanError(NsError.PARAM_ERROR, invalidParam('limit', `capped at ${max}`)));
}
