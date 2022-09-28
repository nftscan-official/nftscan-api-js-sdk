/* eslint-disable no-shadow */
/**
 * The NFTScan SDK supported chains
 */
export enum EvmChain {
  ETH = 'eth',
  BNB = 'bnb',
  ARBITRUM = 'arbitrum',
  GLMR = 'glmr',
  MATIC = 'matic',
  OPTIMISM = 'optimism',
  PLATON = 'platon',
}

/**
 * The erc type of the NFT
 */
export enum ErcType {
  ERC_721 = 'erc721',
  ERC_1155 = 'erc1155',
}

/**
 * The sort type
 */
export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

/**
 * The trade type
 */
export enum TradeType {
  BUY = 'buy',
  sell = 'sell',
}

export enum RangeType {
  m15 = '15m',
  m30 = '30m',
  h1 = '1h',
  h4 = '4h',
  h6 = '6h',
  h12 = '12h',
  d1 = '1d',
  d3 = '3d',
  d7 = '7d',
  d30 = '30d',
  d90 = '90d',
  mth1 = '1mth',
  mth3 = '3mth',
  y1 = '1y',
  all = 'all',
}

/**
 * NFTScan SDK's error code
 */
export enum NsError {
  API_KEY_ERROR = 'api_key_error',
  API_CHAIN_ERROR = 'api_chain_error',
  REQUEST_ERROR = 'request_error',
  RESPONSE_DATA_EMPTY = 'response_data_empty',
  NFTSCAN_DATA_EMPTY = 'nftscan_data_empty',
  PARAM_ERROR = 'param_error',
}

/**
 * NFTScan SDK's common object
 */
export interface NsObject {
  [key: string]: unknown;
}

/**
 * NFTScan SDK's EVM-like blockchain config properties.
 * To use our SDK, You need to register an account on NFTScan open platform({@link https://developer.nftscan.com/}) and get your API-KEY for making calls to API services.
 */
export interface NftscanConfig {
  /**
   * The API key of NFTScan
   */
  apiKey: string;

  /**
   * The name of the chain you will be requesting
   */
  chain: EvmChain;
}

/**
 * NFTScan SDK's Solana blockchain config properties.
 * To use our SDK, You need to register an account on NFTScan open platform({@link https://developer.nftscan.com/}) and get your API-KEY for making calls to API services.
 */
export interface NftscanSolanaConfig {
  /**
   * The API key of NFTScan
   */
  apiKey: string;
}

/**
 * Base pagination properties in NFTScan's HTTP request params
 */
export interface BaseNsPaginationReqParam {
  /**
   * A cursor to retrieve the next page
   */
  cursor?: string;

  /**
   * Page size. Defaults to 20
   */
  limit?: number;
}

/**
 * Base pagination properties in NFTScan's HTTP response data
 */
export interface BaseNsPaginationResData {
  /**
   * The next cursor to be supplied as a query param to retrieve the next page
   */
  next: string;

  /**
   * The total of the results matching the query
   */
  total: number;
}
