import { nftscanPost } from '../../../http/nftscan.http';
import { missingParamError } from '../../../types/nftscan-error';
import { NftscanConfig, NsObject, RefreshMetadataResponse } from '../../../types/nftscan-type';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * The refresh metadata API
 */
export default class NftscanEvmRefresh extends BaseApi<NftscanConfig> {
  /**
   * Refresh an asset
   * - This endpoint enables you to submit a background task. The task will refresh the metadata of a specified NFT asset.
   * - details: {@link https://docs.nftscan.com/reference/evm/refresh-nft-metadata}
   * @param contractAddress The NFT contract address
   * @param tokenId The NFT token ID. Can be in Hex or in Number
   * @returns Promise<{@link RefreshMetadataResponse}>
   */
  refreshAsset(contractAddress: string, tokenId: string): Promise<RefreshMetadataResponse> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    if (isEmpty(tokenId)) {
      return missingParamError('tokenId');
    }

    return nftscanPost<NsObject, RefreshMetadataResponse>(this.config, `${NftscanConst.API.evm.refresh.refreshAsset}`, {
      contract_address: contractAddress,
      token_id: tokenId,
    });
  }

  /**
   * Refresh a contract
   * - This endpoint enables you to submit a background task. The task will refresh the metadata of the entire contract after review.
   * - details: {@link https://docs.nftscan.com/reference/evm/refresh-nft-metadata-by-contract}
   * @param contractAddress The NFT contract address
   * @returns Promise<{@link RefreshMetadataResponse}>
   */
  refreshContract(contractAddress: string): Promise<RefreshMetadataResponse> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    return nftscanPost<NsObject, RefreshMetadataResponse>(
      this.config,
      `${NftscanConst.API.evm.refresh.refreshContract}`,
      {
        contract_address: contractAddress,
      },
    );
  }
}
