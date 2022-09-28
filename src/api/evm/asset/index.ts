import { nftscanGet, nftscanPost } from '../../../http/nftscan.http';
import {
  AccountMintParams,
  AssetParams,
  BatchQueryAssetsListItemParams,
  BatchQueryAssetsParams,
  CommonAssetParams,
  QueryAssetsByFiltersParams,
} from '../../../types/evm/asset/request-params';
import { QueryAllAssetsResponse, Asset, CommonAssetResponse } from '../../../types/evm/asset/response-data';
import { invalidLimitError, invalidParamError, missingParamError } from '../../../types/nftscan-error';
import { ErcType, NftscanConfig, NsObject } from '../../../types/nftscan-type';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * Asset related API
 */
export default class NftscanEvmAsset extends BaseApi<NftscanConfig> {
  /**
   * Retrieve assets owned by an account.
   * - This endpoint returns a set of NFTs owned by an account address.
   * - details: {@link https://docs.nftscan.com/nftscan/getAccountNftAssetsUsingGET}
   * @param accountAddress The address of the owner of the assets
   * @param params The query params {@link AssetParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  getAssetsByAccount(accountAddress: string, params: AssetParams): Promise<CommonAssetResponse> {
    if (isEmpty(accountAddress)) {
      return missingParamError('accountAddress');
    }

    if (isEmpty(params)) {
      return missingParamError('params');
    }

    const { contract_address: contractAddress, erc_type: ercType, limit } = params;

    if (isEmpty(contractAddress) && isEmpty(ercType)) {
      return missingParamError('erc_type');
    }

    if (limit && limit > 1000) {
      return invalidLimitError(1000);
    }

    return nftscanGet<AssetParams, CommonAssetResponse>(
      this.config,
      `${NftscanConst.API.evm.assets.getAssetsByAccount}${accountAddress}`,
      params,
    );
  }

  /**
   * Retrieve all assets owned by an account group by contract address.
   * - This endpoint returns all NFTs owned by an account address. And the NFTs are grouped according to contract address.
   * - details: {@link https://docs.nftscan.com/nftscan/getAccountNftAssetsGroupByContractAddressUsingGET}
   * @param accountAddress The address of the owner of the assets
   * @param ercType Can be erc721 or erc1155.
   * @param showAttribute Whether to load attribute data of the asset. Default is false
   * @returns Promise<Array<{@link QueryAllAssetsResponse}>>
   */
  getAllAssets(
    accountAddress: string,
    ercType: ErcType,
    showAttribute?: boolean,
  ): Promise<Array<QueryAllAssetsResponse>> {
    if (isEmpty(accountAddress)) {
      return missingParamError('accountAddress');
    }

    if (isEmpty(ercType)) {
      return missingParamError('ercType');
    }

    const params: NsObject = {
      erc_type: ercType,
      show_attribute: showAttribute,
    };

    return nftscanGet<NsObject, Array<QueryAllAssetsResponse>>(
      this.config,
      `${NftscanConst.API.evm.assets.getAllAssets}${accountAddress}`,
      params,
    );
  }

  /**
   * Retrieve assets minted by an account.
   * - This endpoint returns a set of NFTs minted by an account address.
   * - details: {@link https://docs.nftscan.com/nftscan/getAccountMintedUsingGET}
   * @param accountAddress The address of the minter of the assets
   * @param params The query params {@link AccountMintParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  getAccountMinted(accountAddress: string, params?: AccountMintParams): Promise<CommonAssetResponse> {
    if (isEmpty(accountAddress)) {
      return missingParamError('accountAddress');
    }

    if (params) {
      const { limit } = params;
      if (limit && limit > 100) {
        return invalidLimitError(100);
      }
    }

    return nftscanGet<AccountMintParams, CommonAssetResponse>(
      this.config,
      `${NftscanConst.API.evm.assets.getAccountMinted}${accountAddress}`,
      params,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve assets by contract address.
   * - This endpoint returns a set of NFTs that belong to an NFT contract address. The NFTs are sorted by token_id with ascending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getAssetsByContractAddressUsingGET}
   * @param contractAddress The NFT contract address for the assets
   * @param params The query params {@link CommonAssetParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  getAssetsByContract(contractAddress: string, params?: CommonAssetParams): Promise<CommonAssetResponse> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    if (params) {
      const { limit } = params;
      if (limit && limit > 1000) {
        return invalidLimitError(1000);
      }
    }

    return nftscanGet<CommonAssetParams, CommonAssetResponse>(
      this.config,
      `${NftscanConst.API.evm.assets.getAssets}${contractAddress}`,
      params,
    );
  }

  /**
   * Retrieve an asset by contract address and token ID.
   * - This endpoint returns a single NFT.
   * - details: {@link https://docs.nftscan.com/nftscan/getAssetByContractAddressAndTokenIdUsingGET}
   * @param contractAddress The NFT contract address for the assets
   * @param tokenId The NFT token ID. Can be in Hex or in Number
   * @param showAttribute Whether to load attribute data of the asset. Default is false
   * @returns Promise<{@link CommonAssetResponse}>
   */
  getAssetsByContractAndTokenId(contractAddress: string, tokenId: string, showAttribute?: boolean): Promise<Asset> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    if (isEmpty(tokenId)) {
      return missingParamError('tokenId');
    }

    const params = showAttribute ? { show_attribute: true } : undefined;

    return nftscanGet<NsObject, Asset>(
      this.config,
      `${NftscanConst.API.evm.assets.getAssets}${contractAddress}/${tokenId}`,
      params,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve assets by list of contract address and token ID.
   * - This endpoint returns a set of NFTs according to the search list in the request body.
   * - details: {@link https://docs.nftscan.com/nftscan/getAssetsByListUsingPOST_1}
   * @param list List of contract address with token ID. Maximum size is 50.
   * @param showAttribute Whether to load attribute data of the assets. Default is false
   * @returns Promise<Array<{@link Asset}>>
   */
  queryAssetsInBatches(list: Array<BatchQueryAssetsListItemParams>, showAttribute?: boolean): Promise<Array<Asset>> {
    if (isEmpty(list)) {
      return missingParamError('list');
    }

    if (list.length > 50) {
      return invalidParamError('list', 'Maximum size is 50');
    }

    const params: BatchQueryAssetsParams = {
      contract_address_with_token_id_list: list,
      show_attribute: !!showAttribute,
    };
    return nftscanPost<BatchQueryAssetsParams, Array<Asset>>(
      this.config,
      NftscanConst.API.evm.assets.queryAssetsInBatches,
      params,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve assets with filters
   * - This endpoint returns a list of NFT assets by applying search filters in the request body. The assets are sorted by nftscan_id with ascending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getAssetsByListUsingPOST}
   * @param params The query params {@link QueryAssetsByFiltersParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  queryAssetsByFilters(params?: QueryAssetsByFiltersParams): Promise<CommonAssetResponse> {
    if (params) {
      const { contract_address_list: contractAddressList, limit } = params;

      if (contractAddressList && contractAddressList.length > 50) {
        return invalidParamError('contract_address_list', 'Maximum size is 50');
      }

      if (limit && limit > 100) {
        return invalidLimitError(100);
      }
    }

    return nftscanPost<QueryAssetsByFiltersParams, CommonAssetResponse>(
      this.config,
      NftscanConst.API.evm.assets.queryAssetsByFilters,
      params,
    );
  }
}
