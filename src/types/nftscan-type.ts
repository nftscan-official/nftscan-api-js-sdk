/* eslint-disable no-shadow */
/**
 * The NFTScan API SDK supported chains
 */
export enum EvmChain {
  ETH = 'eth',
  BNB = 'bnb',
  POLYGON = 'polygon',
  ARBITRUM = 'arbitrum',
  OPTIMISM = 'optimism',
  ZKSYNC = 'zksync',
  LINEA = 'linea',
  BASE = 'base',
  AVALANCHE = 'avalanche',
  MOONBEAM = 'moonbeam',
  PLATON = 'platon',
  CRONOS = 'cronos',
  FANTOM = 'fantom',
  GNOSIS = 'gnosis',
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
  SELL = 'sell',
}

export enum RangeType {
  M15 = '15m',
  M30 = '30m',
  H1 = '1h',
  H4 = '4h',
  H6 = '6h',
  H12 = '12h',
  D1 = '1d',
  D3 = '3d',
  D7 = '7d',
  D30 = '30d',
  D90 = '90d',
  MTH1 = '1mth',
  MTH3 = '3mth',
  Y1 = '1y',
  ALL = 'all',
}

/**
 * NFTScan API SDK's error code
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
 * The NFT event type of the transaction(Mint, Transfer, Sale, Burn)
 */
export enum EventType {
  MINT = 'Mint',
  TRANSFER = 'Transfer',
  SALE = 'Sale',
  BURN = 'Burn',
}

/**
 * NFTScan API SDK's common object
 */
export interface NsObject {
  [key: string]: unknown;
}

/**
 * NFTScan API SDK's EVM-like blockchain config properties.
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
 * NFTScan API SDK's Solana blockchain config properties.
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

/**
 * The response data of refresh metadata api
 */
export interface RefreshMetadataResponse {
  /**
   * The reason for the FAIL status
   */
  reason: string;

  /**
   * Task status. SUCCESS means the task was successfully submitted, FAIL means the task was not submitted due to some reason
   */
  status: string;
}
