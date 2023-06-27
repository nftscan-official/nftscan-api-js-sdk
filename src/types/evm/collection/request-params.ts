import { ErcType, SortDirection } from '../../nftscan-type';

/**
 * The request parameters of EVM API 'getCollectionsByRanking'
 */
export interface QueryCollectionsByRankingParams {
  /**
   * Can be volume_total or floor_price. volume_total for default
   */
  sort_field?:
    | 'volume_total'
    | 'sales_total'
    | 'average_price'
    | 'floor_price'
    | 'volume_1d'
    | 'volume_7d'
    | 'volume_change_1d'
    | 'volume_change_7d'
    | 'average_price_change_1d'
    | 'average_price_change_7d';

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
   * List of contract address. Maximum size is 10.
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
   * Whether name supports fuzzy search
   */
  name_fuzzy_search?: boolean;

  /**
   * The offset for pagination
   */
  offset?: number;

  /**
   * Whether to load collections with the same name. Default is false
   */
  show_collection?: boolean;

  /**
   * Can be asc or desc. asc for default
   */
  sort_direction?: string;

  /**
   * Can be create_block_number or floor_price. create_block_number for default
   */
  sort_field?: 'create_block_number' | 'floor_price';

  /**
   * Filter of collection symbol
   */
  symbol?: string;

  /**
   * Filter of twitter
   */
  twitter?: string;
}

/**
 * The request parameters of EVM API 'queryCollectionsByAccountAddress'
 */
export interface QueryCollectionsByAccountAddressParams {
  /**
   * Can be erc721 or erc1155
   */
  erc_type: ErcType;

  /**
   * Page size. Defaults to 20, capped at 100
   */
  limit?: number;

  /**
   * The offset for pagination
   */
  offset?: number;
}
