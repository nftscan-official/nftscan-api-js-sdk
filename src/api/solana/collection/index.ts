import { nftscanGet, nftscanPost } from '../../../http/nftscan.http';
import { invalidLimitError, invalidParamError, missingParamError } from '../../../types/nftscan-error';
import { NftscanConfig, NsObject } from '../../../types/nftscan-type';
import { QueryCollectionsByFiltersParams } from '../../../types/solana/collection/request-params';
import { Collection } from '../../../types/solana/collection/response-data';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * Collection related API
 */
export default class NftscanSolanaCollection extends BaseApi<NftscanConfig> {
  /**
   * *****
   * [PRO]
   * *****
   * Retrieve a collection.
   * - This endpoint returns information for a collection with the given NFT.
   * - details: {@link https://docs.nftscan.com/solana/getCollectionUsingGET_1}
   * @param collection The NFT collection for the assets
   * @returns Promise<{@link Collection}>
   */
  getCollection(collection: string): Promise<Collection> {
    if (isEmpty(collection)) {
      return missingParamError('collection');
    }

    return nftscanGet<NsObject, Collection>(
      this.config,
      `${NftscanConst.API.solana.collection.getCollection}${collection}`,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve collections with filters.
   * - This endpoint returns information for a list of collections by applying search filters in the request body. The collections are sorted by create_block_number with ascending direction.
   * - details: {@link https://docs.nftscan.com/solana/getCollectionsUsingPOST_1}
   * @param params The query params {@link QueryCollectionsByFiltersParams}
   * @returns Promise<Array<{@link Collection}>>
   */
  queryCollectionsByFilters(params?: QueryCollectionsByFiltersParams): Promise<Array<Collection>> {
    if (params) {
      const { limit, collection } = params;

      if (limit && limit > 100) {
        return invalidLimitError(100);
      }

      if (collection && collection.length > 50) {
        return invalidParamError('collection', 'Maximum size is 50');
      }
    }

    return nftscanPost<QueryCollectionsByFiltersParams, Array<Collection>>(
      this.config,
      `${NftscanConst.API.solana.collection.queryCollectionsByFilters}`,
      params,
    );
  }
}
