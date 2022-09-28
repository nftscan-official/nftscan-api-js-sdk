import { BaseNsPaginationReqParam } from '../../nftscan-type';

/**
 * The request parameters of EVM API 'getTransactionsByAccount'
 */
export interface TransactionParams extends BaseNsPaginationReqParam {
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
export interface QueryTransactionsByFiltersParams extends BaseNsPaginationReqParam {
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
