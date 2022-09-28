import { BaseNsPaginationReqParam } from '../../nftscan-type';

/**
 * The request parameters of Solana API 'queryCollectionsByFilters'
 */
export interface QueryCollectionsByFiltersParams extends BaseNsPaginationReqParam {
  /**
   * Filter of end block number
   */
  block_number_end?: number;

  /**
   * Filter of start block number
   */
  block_number_start?: number;

  /**
   * List of collection. Maximum size is 50.
   */
  collection?: Array<string>;

  /**
   * Filter of symbol
   */
  symbol?: string;
}
