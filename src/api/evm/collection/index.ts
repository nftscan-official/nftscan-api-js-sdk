import { nftscanGet, nftscanPost } from '../../../http/nftscan.http';
import {
  QueryCollectionsByAccountAddressParams,
  QueryCollectionsByFiltersParams,
  QueryCollectionsByRankingParams,
} from '../../../types/evm/collection/request-params';
import { Collection } from '../../../types/evm/collection/response-data';
import { invalidLimitError, invalidParamError, missingParamError } from '../../../types/nftscan-error';
import { NftscanConfig, NsObject } from '../../../types/nftscan-type';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * Collection related API
 */
export default class NftscanEvmCollection extends BaseApi<NftscanConfig> {
  /**
   * Get an NFT collection
   * - This endpoint returns information for a collection with the given NFT contract address.
   * - details: {@link https://docs.nftscan.com/reference/evm/get-an-nft-collection}
   * @param contractAddress The NFT contract address
   * @param showAttribute Whether to obtain attributes distribution for the collection
   * @returns Promise<{@link Collection}>
   */
  getCollectionsByContract(contractAddress: string, showAttribute?: boolean): Promise<Collection> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    return nftscanGet<NsObject, Collection>(
      this.config,
      `${NftscanConst.API.evm.collection.getCollectionsByContract}${contractAddress}`,
      { show_attribute: !!showAttribute },
    );
  }

  /**
   * Get NFT collections by ranking.
   * - This endpoint returns information for a list of collections with the given ranking field. The collections are sorted by the given ranking field with the given sort direction.
   * - details: {@link https://docs.nftscan.com/reference/evm/get-nft-collections-by-ranking}
   * @param params The query params {@link QueryCollectionsByRankingParams}
   * @returns Promise<Array<{@link Collection}>>
   */
  getCollectionsByRanking(params?: QueryCollectionsByRankingParams): Promise<Array<Collection>> {
    if (params) {
      const { limit } = params;

      if (limit && limit > 1000) {
        return invalidLimitError(1000);
      }
    }

    return nftscanGet<QueryCollectionsByRankingParams, Array<Collection>>(
      this.config,
      `${NftscanConst.API.evm.collection.getCollectionsByRanking}`,
      params,
    );
  }

  /**
   * Search NFT collections.
   * - This endpoint returns information for a list of collections by applying search filters in the request body. The collections are sorted by deploy_block_number with ascending direction.
   * - details: {@link https://docs.nftscan.com/reference/evm/search-nft-collections}
   * @param params The query params {@link QueryCollectionsByFiltersParams}
   * @returns Promise<Array<{@link Collection}>>
   */
  queryCollectionsByFilters(params?: QueryCollectionsByFiltersParams): Promise<Array<Collection>> {
    if (params) {
      const { limit, contract_address_list: contractAddressList } = params;

      if (contractAddressList && contractAddressList.length > 10) {
        return invalidParamError('contract_address_list', 'Maximum size is 10');
      }

      if (limit && limit > 100) {
        return invalidLimitError(100);
      }
    }

    return nftscanPost<QueryCollectionsByFiltersParams, Array<Collection>>(
      this.config,
      `${NftscanConst.API.evm.collection.queryCollectionsByFilters}`,
      params,
    );
  }

  /**
   * Get NFT collections by account
   * - This endpoint returns information for a list of collections by the account address. The collections are sorted by floor_price with descending direction.
   * - details: {@link https://docs.nftscan.com/reference/evm/get-nft-collections-by-account}
   * @param accountAddress The account address
   * @param params The query params {@link QueryCollectionsByAccountAddressParams}
   * @returns Promise<Array<{@link Collection}>>
   */
  queryCollectionsByAccountAddress(
    accountAddress: string,
    params: QueryCollectionsByAccountAddressParams,
  ): Promise<Array<Collection>> {
    const { limit, erc_type: ercType } = params;

    if (isEmpty(accountAddress)) {
      return missingParamError('accountAddress');
    }

    if (isEmpty(ercType)) {
      return missingParamError('erc_type');
    }

    if (limit && limit > 100) {
      return invalidLimitError(100);
    }

    return nftscanGet<QueryCollectionsByAccountAddressParams, Array<Collection>>(
      this.config,
      `${NftscanConst.API.evm.collection.queryCollectionsByAccountAddress}${accountAddress}`,
      params,
    );
  }
}
