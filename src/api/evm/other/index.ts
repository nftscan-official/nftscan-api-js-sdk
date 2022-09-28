import { nftscanGet, nftscanPost } from '../../../http/nftscan.http';
import { QueryAssetOwnerByContractParams, QueryAssetOwnerParams } from '../../../types/evm/other/request-params';
import {
  QueryAssestAmountResponse,
  QueryAssetOwnerByContractAndTokenIdResponse,
  QueryAssetOwnerResponse,
  QueryBlockNumberResponse,
  RefreshMetadataResponse,
} from '../../../types/evm/other/response-data';
import { invalidLimitError, invalidParamError, missingParamError } from '../../../types/nftscan-error';
import { NftscanConfig, NsObject } from '../../../types/nftscan-type';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * The other API
 */
export default class NftscanEvmOther extends BaseApi<NftscanConfig> {
  /**
   * Obtain latest block number.
   * - This endpoint returns the latest block number NFTScan has reached to.
   * - details: {@link https://docs.nftscan.com/nftscan/getBlockNumberUsingGET}
   * @returns Promise<{@link QueryBlockNumberResponse}>
   */
  getBlockNumber(): Promise<QueryBlockNumberResponse> {
    return nftscanGet<NsObject, QueryBlockNumberResponse>(this.config, `${NftscanConst.API.evm.other.getBlockNumber}`);
  }

  /**
   * *****
   * [PRO]
   * *****
   * Obtain asset amount owned by accounts.
   * - This endpoint returns information for ERC721 and ERC1155 NFT amount owned by an account address according to the search list in the request body.
   * - details: {@link https://docs.nftscan.com/nftscan/getAssetAmountByAccountsUsingPOST}
   * @param accountAddressList List of account address. Maximum size is 50.
   * @returns Promise<Array<{@link QueryAssestAmountResponse}>>
   */
  queryAssestAmountByAccounts(accountAddressList: Array<string>): Promise<Array<QueryAssestAmountResponse>> {
    if (isEmpty(accountAddressList)) {
      return missingParamError('accountAddressList');
    }

    if (accountAddressList.length > 50) {
      return invalidParamError('accountAddressList', 'Maximum size is 50');
    }

    return nftscanPost<NsObject, Array<QueryAssestAmountResponse>>(
      this.config,
      `${NftscanConst.API.evm.other.queryAssestAmountByAccounts}`,
      { account_address_list: accountAddressList },
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Obtain asset owner amount by contract address.
   * - This endpoint returns a list of owners for  ERC721 NFT asset.
   * - details: {@link https://docs.nftscan.com/nftscan/getAssetOwnerAmountByContractUsingGET}
   * @param params The query params {@link QueryAssetOwnerByContractParams}
   * @returns Promise<{@link QueryAssetOwnerResponse}>
   */
  getAssetOwnerByContract(params: QueryAssetOwnerByContractParams): Promise<QueryAssetOwnerResponse> {
    const { contract_address: contractAddress, limit } = params;

    if (isEmpty(contractAddress)) {
      return missingParamError('contract_address');
    }

    if (limit && limit > 100) {
      return invalidLimitError(100);
    }

    return nftscanGet<QueryAssetOwnerByContractParams, QueryAssetOwnerResponse>(
      this.config,
      `${NftscanConst.API.evm.other.getAssetOwnerByContract}`,
      params,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Obtain asset owner amount by contract address and token ID.
   * - This endpoint returns information for owner amount of NFTs that belong to an NFT contract address. The NFTs are sorted by token_id with ascending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getAssetOwnersUsingGET}
   * @param params The query params {@link QueryAssetOwnerParams}
   * @returns Promise<{@link QueryAssetOwnerByContractAndTokenIdResponse}>
   */
  getAssetOwnerByContractAndTokenId(
    params: QueryAssetOwnerParams,
  ): Promise<QueryAssetOwnerByContractAndTokenIdResponse> {
    const { contract_address: contractAddress, token_id: tokenId, limit } = params;

    if (isEmpty(contractAddress)) {
      return missingParamError('contract_address');
    }

    if (isEmpty(tokenId)) {
      return missingParamError('token_id');
    }

    if (limit && limit > 100) {
      return invalidLimitError(100);
    }

    return nftscanGet<QueryAssetOwnerParams, QueryAssetOwnerByContractAndTokenIdResponse>(
      this.config,
      `${NftscanConst.API.evm.other.getAssetOwnerByContractAndTokenId}`,
      params,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Submit a task for refreshing NFT metadata.
   * - This endpoint enables you to submit a background task. The task will refresh the metadata for a contract_address or a specified NFT asset.
   * - details: {@link https://docs.nftscan.com/nftscan/refreshAssetMetadataUsingPOST}
   * @param contractAddress The NFT contract address
   * @param tokenId The NFT token ID. Can be in Hex or in Number
   * @returns Promise<{@link RefreshMetadataResponse}>
   */
  refreshMetadata(contractAddress: string, tokenId: string): Promise<RefreshMetadataResponse> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    return nftscanPost<NsObject, RefreshMetadataResponse>(
      this.config,
      `${NftscanConst.API.evm.other.refreshMetadata}`,
      { contract_address: contractAddress, token_id: tokenId },
    );
  }
}
