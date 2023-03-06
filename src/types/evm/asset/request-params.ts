import { BaseNsPaginationReqParam, ErcType, SortDirection } from '../../nftscan-type';

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

  /**
   * Can be mint_time or own_time
   */
  sort_field?: 'mint_time' | 'own_time';

  /**
   * Can be asc or desc
   */
  sort_direction?: SortDirection;
}

/**
 * The request parameters of EVM API 'getAccountMinted'
 */
export interface AccountMintParams extends CommonAssetParams {
  /**
   * The NFT contract address for the assets
   */
  contract_address?: string;

  /**
   * Can be erc721 or erc1155. Default is erc721
   */
  erc_type?: ErcType;
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

interface Attribute {
  /**
   * The name of the attribute
   */
  attribute_name: string;

  /**
   * The value(s) for the attribute name
   */
  attribute_values: Array<string>;
}

/**
 * The request parameters of EVM API 'queryAssetsByAttributes'
 */
export interface QueryAssetsByAttributesParams extends CommonAssetParams {
  /**
   * List of attribute name with attribute value(s). Maximum size is 10
   */
  attributes: Array<Attribute>;

  /**
   * The NFT contract address for the assets
   */
  contract_address: string;
}
