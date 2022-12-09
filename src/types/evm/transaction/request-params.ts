import { BaseNsPaginationReqParam, EventType, SortDirection } from '../../nftscan-type';

/**
 * The common request parameters of EVM transaction related API
 */
export interface CommonTransactionParams extends BaseNsPaginationReqParam {
  /**
   * The NFT event type of the transaction(Mint, Transfer, Sale, Burn). Using ';' to separate multiple events
   */
  event_type?: Array<EventType>;

  /**
   * Can be asc or desc. desc for default
   */
  sort_direction?: SortDirection;
}

/**
 * The request parameters of EVM API 'getTransactionsByAccount'
 */
export interface TransactionParams extends CommonTransactionParams {
  /**
   * The NFT token ID. Can be in Hex or in Number
   */
  token_id?: string;

  /**
   * The NFT contract address for the assets
   */
  contract_address?: string;
}

/**
 * The request parameters of EVM API 'queryTransactionsByFilters'
 */
export interface QueryTransactionsByFiltersParams extends CommonTransactionParams {
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
}
