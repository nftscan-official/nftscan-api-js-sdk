import { BaseNsPaginationReqParam, ErcType } from '../../nftscan-type';

/**
 * The common request parameters of EVM asset related API
 */
export interface CommonAssetParams extends BaseNsPaginationReqParam {
  /**
   * Whether to load attribute data of the assets. Default is false
   */
  show_attribute?: boolean;
}

/**
 * The request parameters of EVM API 'getAssetsByAccount'
 */
export interface AssetParams extends CommonAssetParams {
  /**
   * Can be erc721 or erc1155. Required if contract_address is null
   */
  erc_type?: ErcType;

  /**
   * The NFT contract address for the assets
   */
  contract_address?: string;
}

/**
 * The request parameters of EVM API 'getAccountMinted'
 */
export interface AccountMintParams extends CommonAssetParams {
  /**
   * The NFT contract address for the assets
   */
  contract_address?: string;
}

/**
 * The parameters of contract_address_with_token_id_list
 */
export interface BatchQueryAssetsListItemParams {
  /**
   * The contract address
   */
  contract_address: string;

  /**
   * The token ID
   */
  token_id: string;
}

/**
 * The request parameters of EVM API 'queryAssetsInBatches'
 */
export interface BatchQueryAssetsParams {
  /**
   * List of contract address with token ID. Maximum size is 50.
   */
  contract_address_with_token_id_list: Array<BatchQueryAssetsListItemParams>;

  /**
   * Whether to load attribute data of the assets. Default is false
   */
  show_attribute?: boolean;
}

/**
 * The request parameters of EVM API 'queryAssetsByFilters'
 */
export interface QueryAssetsByFiltersParams extends CommonAssetParams {
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
