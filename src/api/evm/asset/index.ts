import { nftscanGet, nftscanPost } from '../../../http/nftscan.http';
import {
  AccountMintParams,
  AssetParams,
  AssetsByContractParams,
  BatchQueryAssetsListItemParams,
  BatchQueryAssetsParams,
  QueryAssetsByAttributesParams,
  QueryAssetsByFiltersParams,
} from '../../../types/evm/asset/request-params';
import {
  Asset,
  CollectionAssets,
  CommonAssetResponse,
  QueryMultiChainAssets,
} from '../../../types/evm/asset/response-data';
import { invalidLimitError, invalidParamError, missingParamError } from '../../../types/nftscan-error';
import { ErcType, EvmChain, NftscanConfig, NsObject } from '../../../types/nftscan-type';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * Asset related API
 */
export default class NftscanEvmAsset extends BaseApi<NftscanConfig> {
  /**
   * Get NFTs by account
   * - This endpoint returns a set of NFTs owned by an account address.
   * - details: {@link https://docs.nftscan.com/reference/evm/get-nfts-by-account}
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
   * Get all NFTs by account
   * - This endpoint returns all NFTs owned by an account address. And the NFTs are grouped according to contract address.
   * - details: {@link https://docs.nftscan.com/reference/evm/get-all-nfts-by-account}
   * @param accountAddress The address of the owner of the assets
   * @param ercType Can be erc721 or erc1155.
   * @param showAttribute Whether to load attribute data of the asset. Default is false
   * @returns Promise<Array<{@link CollectionAssets}>>
   */
  getAllAssets(accountAddress: string, ercType?: ErcType, showAttribute?: boolean): Promise<Array<CollectionAssets>> {
    if (isEmpty(accountAddress)) {
      return missingParamError('accountAddress');
    }

    const params: NsObject = {
      erc_type: ercType,
      show_attribute: showAttribute,
    };

    return nftscanGet<NsObject, Array<CollectionAssets>>(
      this.config,
      `${NftscanConst.API.evm.assets.getAllAssets}${accountAddress}`,
      params,
    );
  }

  /**
   * Get minted NFTs by account
   * - This endpoint returns a set of NFTs minted by an account address.
   * - details: {@link https://docs.nftscan.com/reference/evm/get-minted-nfts-by-account}
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
   * Get NFTs by contract
   * - This endpoint returns a set of NFTs that belong to an NFT contract address. The NFTs are sorted by token_id with ascending direction.
   * - details: {@link https://docs.nftscan.com/reference/evm/get-nfts-by-contract}
   * @param contractAddress The NFT contract address for the assets
   * @param params The query params {@link AssetsByContractParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  getAssetsByContract(contractAddress: string, params?: AssetsByContractParams): Promise<CommonAssetResponse> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    if (params) {
      const { limit } = params;
      if (limit && limit > 100) {
        return invalidLimitError(100);
      }
    }

    return nftscanGet<AssetsByContractParams, CommonAssetResponse>(
      this.config,
      `${NftscanConst.API.evm.assets.getAssets}${contractAddress}`,
      params,
    );
  }

  /**
   * Get single NFT
   * - This endpoint returns a single NFT.
   * - details: {@link https://docs.nftscan.com/reference/evm/get-single-nft}
   * @param contractAddress The NFT contract address for the assets
   * @param tokenId The NFT token ID. Can be in Hex or in Number
   * @param showAttribute Whether to load attribute data of the asset. Default is false
   * @returns Promise<{@link Asset}>
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
   * Get multiple NFTs
   * - This endpoint returns a set of NFTs according to the search list in the request body.
   * - details: {@link https://docs.nftscan.com/reference/evm/get-multiple-nfts}
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
   * Search NFTs
   * - This endpoint returns a list of NFT assets by applying search filters in the request body. The assets are sorted by nftscan_id with ascending direction.
   * - details: {@link https://docs.nftscan.com/reference/evm/search-nfts}
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

  /**
   * Get NFTs by attributes
   * - This endpoint returns a set of NFTs those belong to an NFT contract address with attributes. The NFTs are sorted by token_id with ascending direction.
   * - details: {@link https://docs.nftscan.com/reference/evm/get-nfts-by-attributes}
   * @param params The query params {@link QueryAssetsByAttributesParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  queryAssetsByAttributes(params: QueryAssetsByAttributesParams): Promise<CommonAssetResponse> {
    const { contract_address: contractAddress, attributes } = params;

    if (isEmpty(contractAddress)) {
      return missingParamError('contract_address');
    }

    if (isEmpty(attributes)) {
      return missingParamError('attributes');
    }

    if (attributes.length > 10) {
      return invalidParamError('attributes', 'Maximum size is 10');
    }

    return nftscanPost<QueryAssetsByAttributesParams, CommonAssetResponse>(
      this.config,
      NftscanConst.API.evm.assets.queryAssetsByAttributes,
      params,
    );
  }

  /**
   * Get all multi-chain NFTs by account
   * - This endpoint returns all multi-chain NFTs owned by an account address. And the NFTs are grouped according to contract address.
   * - details: {@link https://docs.nftscan.com/reference/evm/get-all-multi-chain-nfts-by-account}
   * @param accountAddress The address of the owner of the assets
   * @param chain The short name of chain(eth, bnb, polygon, moonbeam, arbitrum, optimism, platon, avalanche). Using ';' to separate multiple chains
   * @param ercType Can be erc721 or erc1155.
   * @returns Promise<Array<{@link QueryMultiChainAssets}>>
   *
   */
  getMultiChainAssets(
    accountAddress: string,
    chain: Array<EvmChain>,
    ercType?: ErcType,
  ): Promise<Array<QueryMultiChainAssets>> {
    if (isEmpty(accountAddress)) {
      return missingParamError('accountAddress');
    }

    if (isEmpty(chain)) {
      return missingParamError('chain');
    }

    const params: NsObject = { chain: chain.join(';'), erc_type: ercType };

    return nftscanGet<NsObject, Array<QueryMultiChainAssets>>(
      this.config,
      `${NftscanConst.API.evm.assets.getMultiChainAssets}${accountAddress}`,
      params,
    );
  }
}
