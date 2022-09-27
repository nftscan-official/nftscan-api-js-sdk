import { nftscanGet } from '../../../http/nftscan.http';
import { Asset, CommonAssetResponse, QueryAllAssetsResponse } from '../../../types/solana/asset/response-data';
import { invalidLimitError, missingParamError } from '../../../types/nftscan-error';
import { AssetParams } from '../../../types/solana/asset/request-params';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';
import { BaseNsPaginationReqParam, NftscanConfig, NsObject } from '../../../types/nftscan-type';

/**
 * Asset related API
 */
export default class NftscanSolanaAsset extends BaseApi<NftscanConfig> {
  /**
   * Retrieve assets owned by an account.
   * - This endpoint returns a set of NFTs owned by an account address.
   * - details: {@link https://docs.nftscan.com/solana/getAccountNftAssetsUsingGET_1}
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
   * Retrieve all assets owned by an account group by collection.
   * - This endpoint returns all NFTs owned by an account address. And the NFTs are grouped according to collection.
   * - details: {@link https://docs.nftscan.com/solana/getAccountNftAssetsGroupByCollectionUsingGET}
   * @param accountAddress The address of the owner of the assets
   * @returns Promise<Array<{@link QueryAllAssetsResponse}>>
   */
  getAllAssets(accountAddress: string): Promise<Array<QueryAllAssetsResponse>> {
    if (isEmpty(accountAddress)) {
      return missingParamError('accountAddress');
    }

    return nftscanGet<NsObject, Array<QueryAllAssetsResponse>>(
      this.config,
      `${NftscanConst.API.solana.assets.getAllAssets}${accountAddress}`,
    );
  }

  /**
   * Retrieve assets minted by an account.
   * - This endpoint returns a set of NFTs minted by an account address.
   * - details: {@link https://docs.nftscan.com/solana/getAccountMintedUsingGET_1}
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
   * *****
   * [PRO]
   * *****
   * Retrieve assets by collection.
   * - This endpoint returns a set of NFTs that belong to an NFT collection. The NFTs are sorted by token address with ascending direction.
   * - details: {@link https://docs.nftscan.com/solana/getAssetsByCollectionUsingGET}
   * @param collection The NFT collection for the assets
   * @param params The query params {@link BaseNsPaginationReqParam}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  getAssetsByCollection(collection: string, params?: BaseNsPaginationReqParam): Promise<CommonAssetResponse> {
    if (isEmpty(collection)) {
      return missingParamError('collection');
    }

    if (params) {
      const { limit } = params;
      if (limit && limit > 1000) {
        return invalidLimitError(1000);
      }
    }
    return nftscanGet<BaseNsPaginationReqParam, CommonAssetResponse>(
      this.config,
      `${NftscanConst.API.solana.assets.getAssetsByCollection}${collection}`,
      params,
    );
  }

  /**
   * Retrieve an asset by token address.
   * - This endpoint returns a single NFT.
   * - details: {@link https://docs.nftscan.com/solana/getAssetByTokenAddressUsingGET}
   * @param tokenAddress The NFT token address for the assets
   * @returns Promise<{@link Asset}>
   */
  getAssetsByTokenAddress(tokenAddress: string): Promise<Asset> {
    if (isEmpty(tokenAddress)) {
      return missingParamError('tokenAddress');
    }

    return nftscanGet<AssetParams, Asset>(
      this.config,
      `${NftscanConst.API.solana.assets.getAssetsByTokenAddress}${tokenAddress}`,
    );
  }
}
