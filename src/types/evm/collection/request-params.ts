import { SortDirection } from '../../nftscan-type';

/**
 * The request parameters of EVM API 'getCollectionsByRanking'
 */
export interface QueryCollectionsByRankingParams {
  /**
   * Can be volume_total or floor_price. volume_total for default
   */
  sort_field?: 'volume_total' | 'floor_price';

  /**
   * Can be asc or desc. desc for default
   */
  sort_direction?: SortDirection;

  /**
   * Result size. Defaults to 100, capped at 1000
   */
  limit?: number;
}

/**
 * The request parameters of EVM API 'queryCollectionsByFilters'
 */
export interface QueryCollectionsByFiltersParams {
  /**
   * Filter of end block number
   */
  block_number_end?: number;

  /**
   * Filter of start block number
   */
  block_number_start?: number;

  /**
   * List of contract address. Maximum size is 50.
   */
  contract_address_list?: Array<string>;

  /**
   * Page size. Defaults to 20, capped at 100
   */
  limit?: number;

  /**
   * Filter of collection name
   */
  name?: string;

  /**
   * The offset for pagination
   */
  offset?: number;

  /**
   * Filter of collection symbol
   */
  symbol?: string;
}
