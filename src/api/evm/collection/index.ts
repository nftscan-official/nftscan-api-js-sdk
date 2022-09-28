import { nftscanGet, nftscanPost } from '../../../http/nftscan.http';
import {
  QueryCollectionsByFiltersParams,
  QueryCollectionsByRankingParams,
} from '../../../types/evm/collection/request-params';
import { Collection } from '../../../types/evm/collection/response-data';
import { invalidLimitError, missingParamError } from '../../../types/nftscan-error';
import { NftscanConfig, NsObject } from '../../../types/nftscan-type';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * Collection related API
 */
export default class NftscanEvmCollection extends BaseApi<NftscanConfig> {
  /**
   * *****
   * [PRO]
   * *****
   * Retrieve a collection by contract address.
   * - This endpoint returns information for a collection with the given NFT contract address.
   * - details: {@link https://docs.nftscan.com/nftscan/getCollectionUsingGET}
   * @param contractAddress The NFT contract address
   * @returns Promise<{@link Collection}>
   */
  getCollectionsByContract(contractAddress: string): Promise<Collection> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    return nftscanGet<NsObject, Collection>(
      this.config,
      `${NftscanConst.API.evm.collection.getCollectionsByContract}${contractAddress}`,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve collections by ranking.
   * - This endpoint returns information for a list of collections with the given ranking field. The collections are sorted by the given ranking field with the given sort direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getRankingsUsingGET}
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
   * *****
   * [PRO]
   * *****
   * Retrieve collections with filters.
   * - This endpoint returns information for a list of collections by applying search filters in the request body. The collections are sorted by deploy_block_number with ascending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getCollectionsUsingPOST}
   * @param params The query params {@link QueryCollectionsByFiltersParams}
   * @returns Promise<Array<{@link Collection}>>
   */
  queryCollectionsByFilters(params?: QueryCollectionsByFiltersParams): Promise<Array<Collection>> {
    if (params) {
      const { limit } = params;

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
}
