import { nftscanGet, nftscanPost } from '../../../http/nftscan.http';
import {
  CommonTransactionParams,
  QueryTransactionsByFiltersParams,
  TransactionParams,
} from '../../../types/evm/transaction/request-params';
import { CommonTransactionResponse, Transaction } from '../../../types/evm/transaction/response-data';
import {
  invalidLimitError,
  invalidParamError,
  missingParamError,
  paramErrorDefault,
} from '../../../types/nftscan-error';
import { EventType, NftscanConfig, NsObject } from '../../../types/nftscan-type';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * Transaction related API
 */
export default class NftscanEvmTransaction extends BaseApi<NftscanConfig> {
  /**
   * *****
   * [PRO]
   * *****
   * Retrieve transactions by an account.
   * - This endpoint returns a list of NFT transactions for an account address. The transactions are sorted by timestamp with descending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getAccountTransactionsUsingGET_1}
   * @param accountAddress The account address
   * @param params The query params {@link TransactionParams}
   * @returns Promise<{@link CommonTransactionResponse}>
   */
  getTransactionsByAccount(accountAddress: string, params?: TransactionParams): Promise<CommonTransactionResponse> {
    if (isEmpty(accountAddress)) {
      return missingParamError('accountAddress');
    }

    if (params) {
      const { token_id: TokenId, contract_address: contractAddress, limit } = params;

      if (!isEmpty(TokenId) && isEmpty(contractAddress)) {
        return missingParamError('contract_address');
      }

      if (limit && limit > 100) {
        return invalidLimitError(100);
      }
    }

    return nftscanGet<TransactionParams, CommonTransactionResponse>(
      this.config,
      `${NftscanConst.API.evm.transaction.getTransactionsByAccount}${accountAddress}`,
      NftscanEvmTransaction.convertEventType(params),
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve transactions by contract address.
   * - This endpoint returns a list of NFT transactions for an NFT contract address. The transactions are sorted by timestamp with descending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getTransactionsByContractAddressUsingGET}
   * @param contractAddress The NFT contract address
   * @param params The query params {@link CommonTransactionParams}
   * @returns Promise<{@link CommonTransactionResponse}>
   */
  getTransactionsByContract(
    contractAddress: string,
    params?: CommonTransactionParams,
  ): Promise<CommonTransactionResponse> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    if (params) {
      const { limit } = params;
      if (limit && limit > 100) {
        return invalidLimitError(100);
      }
    }

    return nftscanGet<CommonTransactionParams, CommonTransactionResponse>(
      this.config,
      `${NftscanConst.API.evm.transaction.getTransactions}${contractAddress}`,
      NftscanEvmTransaction.convertEventType(params),
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve transactions by contract address and token ID.
   * - This endpoint returns a list of NFT transactions for a single NFT. The transactions are sorted by timestamp with descending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getTransactionByContractAddressAndTokenIdUsingGET}
   * @param contractAddress The NFT contract address
   * @param tokenId The NFT token ID. Can be in Hex or in Number
   * @param params The query params {@link CommonTransactionParams}
   * @returns Promise<{@link CommonTransactionResponse}>
   */
  getTransactionsByContractAndTokenId(
    contractAddress: string,
    tokenId: string,
    params?: CommonTransactionParams,
  ): Promise<CommonTransactionResponse> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    if (isEmpty(tokenId)) {
      return missingParamError('tokenId');
    }

    if (params) {
      const { limit } = params;
      if (limit && limit > 100) {
        return invalidLimitError(100);
      }
    }

    return nftscanGet<CommonTransactionParams, CommonTransactionResponse>(
      this.config,
      `${NftscanConst.API.evm.transaction.getTransactions}${contractAddress}/${tokenId}`,
      NftscanEvmTransaction.convertEventType(params),
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve transactions by to address.
   * - This endpoint returns a list of NFT transactions filtered by the param `to` of the transaction. The transactions are sorted by timestamp with descending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getTransactionByTxToUsingGET}
   * @param toAddress The to address of the transaction
   * @param params The query params {@link CommonTransactionParams}
   * @returns Promise<{@link CommonTransactionResponse}>
   */
  getTransactionsByToAddress(toAddress: string, params?: CommonTransactionParams): Promise<CommonTransactionResponse> {
    if (isEmpty(toAddress)) {
      return missingParamError('toAddress');
    }

    if (params) {
      const { limit } = params;
      if (limit && limit > 100) {
        return invalidLimitError(100);
      }
    }

    return nftscanGet<CommonTransactionParams, CommonTransactionResponse>(
      this.config,
      `${NftscanConst.API.evm.transaction.getTransactionsByToAddress}${toAddress}`,
      NftscanEvmTransaction.convertEventType(params),
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve transactions with filters.
   * - This endpoint returns a list of NFT transactions by applying search filters in the request body. The transactions are sorted by timestamp with descending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getAssetsByListUsingPOST_2}
   * @param params The query params {@link QueryTransactionsByFiltersParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  queryTransactionsByFilters(params?: QueryTransactionsByFiltersParams): Promise<CommonTransactionResponse> {
    if (params) {
      const {
        contract_address_list: contractAddressList,
        limit,
        block_number_start: blockNumberStart,
        block_number_end: blockNumberEnd,
      } = params;

      if (contractAddressList && contractAddressList.length > 50) {
        return invalidParamError('contract_address_list', 'Maximum size is 50');
      }

      if (blockNumberStart === undefined && blockNumberEnd === undefined && isEmpty(contractAddressList)) {
        return paramErrorDefault('need more filter');
      }

      if (limit && limit > 100) {
        return invalidLimitError(100);
      }
    }

    return nftscanPost<QueryTransactionsByFiltersParams, CommonTransactionResponse>(
      this.config,
      NftscanConst.API.evm.transaction.queryTransactionsByFilters,
      NftscanEvmTransaction.convertEventType(params),
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve transactions by the list of transaction hash.
   * - This endpoint returns the transaction records queried based on the list of transaction hash.
   * - details: {@link https://docs.nftscan.com/nftscan/getAssetsByListUsingPOST_3}
   * @param txHashList The string Array of transaction hash. Maximum size is 50.
   * @param eventType The NFT event type Array<{@link EventType}> of the transaction.
   * @returns Promise<Array<{@link Transaction}>>
   */
  queryTransactionsByTxHashList(txHashList: Array<string>, eventType?: Array<EventType>): Promise<Array<Transaction>> {
    if (isEmpty(txHashList)) {
      return missingParamError('txHashList');
    }

    if (txHashList.length > 50) {
      return invalidParamError('txHashList', 'Maximum size is 50');
    }

    const params: NsObject = { tx_hash_list: txHashList };
    if (eventType) {
      params.event_type = eventType;
    }

    return nftscanPost<NsObject, Array<Transaction>>(
      this.config,
      NftscanConst.API.evm.transaction.queryTransactionsByTxHashList,
      NftscanEvmTransaction.convertEventType(params),
    );
  }

  private static convertEventType(params?: unknown): NsObject | undefined {
    if (!params) {
      return params as NsObject;
    }
    const result: NsObject = {
      ...params,
    };
    if (result.event_type && Array.isArray(result.event_type)) {
      result.event_type = result.event_type.join(';');
    }
    return result;
  }
}
