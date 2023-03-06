import { BaseNsPaginationReqParam } from '../../nftscan-type';

/**
 * The common request parameters of Solana asset related API
 */
export interface AssetParams extends BaseNsPaginationReqParam {
  /**
   * The NFT collection for the assets
   */
  collection?: string;
}

/**
 * The request parameters of Solana API 'getAssetsByCollection'
 */
export interface QueryAssetsByCollectionParams extends BaseNsPaginationReqParam {
  /**
   * Whether to obtain attributes for the assets
   */
  show_attribute?: boolean;
}
