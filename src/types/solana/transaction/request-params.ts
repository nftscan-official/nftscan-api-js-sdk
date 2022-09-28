import { BaseNsPaginationReqParam } from '../../nftscan-type';

/**
 * The common request parameters of Solana asset related API
 */
export interface TransactionParams extends BaseNsPaginationReqParam {
  /**
   * The NFT collection for the assets
   */
  collection?: string;
}
