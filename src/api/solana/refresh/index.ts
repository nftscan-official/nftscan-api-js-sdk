import { nftscanPost } from '../../../http/nftscan.http';
import { missingParamError } from '../../../types/nftscan-error';
import { NftscanConfig, NsObject, RefreshMetadataResponse } from '../../../types/nftscan-type';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * The refresh metadata API
 */
export default class NftscanSolanaRefresh extends BaseApi<NftscanConfig> {
  /**
   * Refresh NFT metadata
   * - This endpoint enables you to submit a background task. The task will refresh the metadata of a specified NFT asset.
   * - details: {@link https://docs.nftscan.com/reference/solana/refresh-nft-metadata}
   * @param tokenAddress The token address of the NFT
   * @returns Promise<{@link RefreshMetadataResponse}>
   */
  refreshAsset(tokenAddress: string): Promise<RefreshMetadataResponse> {
    if (isEmpty(tokenAddress)) {
      return missingParamError('tokenAddress');
    }

    return nftscanPost<NsObject, RefreshMetadataResponse>(
      this.config,
      `${NftscanConst.API.solana.refresh.refreshAsset}`,
      {
        token_address: tokenAddress,
      },
    );
  }
}
