import { nftscanGet } from '../../../http/nftscan.http';
import { invalidLimitError, invalidParamError, missingParamError } from '../../../types/nftscan-error';
import { NftscanConfig, NsObject } from '../../../types/nftscan-type';
import { AssetParams, QueryAssetsByCollectionParams } from '../../../types/solana/asset/request-params';
import { Asset, CommonAssetResponse, QueryAllAssetsResponse } from '../../../types/solana/asset/response-data';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * Asset related API
 */
export default class NftscanSolanaAsset extends BaseApi<NftscanConfig> {
  /**
   * Get NFTs by account
   * - This endpoint returns a set of NFTs owned by an account address.
   * - details: {@link https://docs.nftscan.com/reference/solana/get-nfts-by-account}
   * @param accountAddress The address of the owner of the assets
   * @param params The query params {@link AssetParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  getAssetsByAccount(accountAddress: string, params?: AssetParams): Promise<CommonAssetResponse> {
    if (isEmpty(accountAddress)) {
      return missingParamError('accountAddress');
    }

    if (params) {
      const { limit } = params;
      if (limit && limit > 100) {
        return invalidLimitError(100);
      }
    }

    return nftscanGet<AssetParams, CommonAssetResponse>(
      this.config,
      `${NftscanConst.API.solana.assets.getAssetsByAccount}${accountAddress}`,
      params,
    );
  }

  /**
   * Get all NFTs by account
   * - This endpoint returns all NFTs owned by an account address. And the NFTs are grouped according to collection.
   * - details: {@link https://docs.nftscan.com/reference/solana/get-all-nfts-by-account}
   * @param accountAddress The address of the owner of the assets
   * @param showAttribute Whether to obtain attributes for the assets
   * @returns Promise<Array<{@link QueryAllAssetsResponse}>>
   */
  getAllAssets(accountAddress: string, showAttribute?: boolean): Promise<Array<QueryAllAssetsResponse>> {
    if (isEmpty(accountAddress)) {
      return missingParamError('accountAddress');
    }

    return nftscanGet<NsObject, Array<QueryAllAssetsResponse>>(
      this.config,
      `${NftscanConst.API.solana.assets.getAllAssets}${accountAddress}`,
      { show_attribute: !!showAttribute },
    );
  }

  /**
   * Get minted NFTs by account
   * - This endpoint returns a set of NFTs minted by an account address.
   * - details: {@link https://docs.nftscan.com/reference/solana/get-minted-nfts-by-account}
   * @param accountAddress The address of the owner of the assets
   * @param params The query params {@link AssetParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  getAccountMinted(accountAddress: string, params?: AssetParams): Promise<CommonAssetResponse> {
    if (isEmpty(accountAddress)) {
      return missingParamError('accountAddress');
    }

    if (params) {
      const { limit } = params;
      if (limit && limit > 100) {
        return invalidLimitError(100);
      }
    }

    return nftscanGet<AssetParams, CommonAssetResponse>(
      this.config,
      `${NftscanConst.API.solana.assets.getAccountMinted}${accountAddress}`,
      params,
    );
  }

  /**
   * Get NFTs by collection
   * - This endpoint returns a set of NFTs that belong to an NFT collection. The NFTs are sorted by token address with ascending direction.
   * - details: {@link https://docs.nftscan.com/reference/solana/get-nfts-by-collection}
   * @param collection The NFT collection for the assets
   * @param params The query params {@link QueryAssetsByCollectionParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  getAssetsByCollection(collection: string, params?: QueryAssetsByCollectionParams): Promise<CommonAssetResponse> {
    if (isEmpty(collection)) {
      return missingParamError('collection');
    }

    if (params) {
      const { limit } = params;
      if (limit && limit > 1000) {
        return invalidLimitError(1000);
      }
    }
    return nftscanGet<QueryAssetsByCollectionParams, CommonAssetResponse>(
      this.config,
      `${NftscanConst.API.solana.assets.getAssetsByCollection}${collection}`,
      params,
    );
  }

  /**
   * Get single NFT
   * - This endpoint returns a single NFT.
   * - details: {@link https://docs.nftscan.com/reference/solana/get-single-nft}
   * @param tokenAddress The NFT token address for the assets
   * @param showAttribute Whether to obtain attributes for the assets
   * @returns Promise<{@link Asset}>
   */
  getAssetsByTokenAddress(tokenAddress: string, showAttribute?: boolean): Promise<Asset> {
    if (isEmpty(tokenAddress)) {
      return missingParamError('tokenAddress');
    }

    return nftscanGet<NsObject, Asset>(
      this.config,
      `${NftscanConst.API.solana.assets.getAssetsByTokenAddress}${tokenAddress}`,
      { show_attribute: !!showAttribute },
    );
  }

  /**
   * Get multiple NFTs
   * - This endpoint returns a single NFT.
   * - details: {@link https://docs.nftscan.com/reference/solana/get-single-nft}
   * @param list List of token address. Maximum size is 50.
   * @param showAttribute Whether to obtain attributes for the assets
   * @returns Promise<{@link Asset}>
   */
  queryAssetsInBatches(list: Array<{ token_address: string }>, showAttribute?: boolean): Promise<Asset> {
    if (isEmpty(list)) {
      return missingParamError('list');
    }

    if (list.length > 50) {
      return invalidParamError('list', 'Maximum size is 50');
    }

    return nftscanGet<NsObject, Asset>(this.config, `${NftscanConst.API.solana.assets.queryAssetsInBatches}`, {
      show_attribute: !!showAttribute,
      token_address_list: list,
    });
  }
}
