import { nftscanGet } from '../../../http/nftscan.http';
import { invalidLimitError, missingParamError } from '../../../types/nftscan-error';
import { BaseNsPaginationReqParam, NftscanConfig } from '../../../types/nftscan-type';
import { TransactionParams } from '../../../types/solana/transaction/request-params';
import { CommonTransactionResponse } from '../../../types/solana/transaction/response-data';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * Transaction related API
 */
export default class NftscanSolanaTransaction extends BaseApi<NftscanConfig> {
  /**
   * Retrieve transactions by an account.
   * - This endpoint returns a list of NFT transactions for an account address. The transactions are sorted by timestamp with descending direction.
   * - details: {@link https://docs.nftscan.com/solana/getAccountTransactionsUsingGET}
   * @param accountAddress The account address
   * @param params The query params {@link TransactionParams}
   * @returns Promise<{@link CommonTransactionResponse}>
   */
  getTransactionsByAccount(accountAddress: string, params?: TransactionParams): Promise<CommonTransactionResponse> {
    if (isEmpty(accountAddress)) {
      return missingParamError('accountAddress');
    }

    if (params) {
      const { limit } = params;
      if (limit && limit > 100) {
        return invalidLimitError(100);
      }
    }

    return nftscanGet<TransactionParams, CommonTransactionResponse>(
      this.config,
      `${NftscanConst.API.solana.transaction.getTransactionsByAccount}${accountAddress}`,
      params,
    );
  }

  /**
   * Retrieve transactions by collection.
   * - This endpoint returns a list of NFT transactions for an NFT collection. The transactions are sorted by timestamp with descending direction.
   * - details: {@link https://docs.nftscan.com/solana/getTransactionsByCollectionUsingGET}
   * @param collection The NFT collection for the assets
   * @param params The query params {@link BaseNsPaginationReqParam}
   * @returns Promise<{@link CommonTransactionResponse}>
   */
  getTransactionsByCollection(
    collection: string,
    params?: BaseNsPaginationReqParam,
  ): Promise<CommonTransactionResponse> {
    if (isEmpty(collection)) {
      return missingParamError('collection');
    }

    if (params) {
      const { limit } = params;
      if (limit && limit > 100) {
        return invalidLimitError(100);
      }
    }

    return nftscanGet<BaseNsPaginationReqParam, CommonTransactionResponse>(
      this.config,
      `${NftscanConst.API.solana.transaction.getTransactionsByCollection}${collection}`,
      params,
    );
  }

  /**
   * Retrieve transactions by token address.
   * - This endpoint returns a list of NFT transactions for a single NFT. The transactions are sorted by timestamp with descending direction.
   * - details: {@link https://docs.nftscan.com/solana/getTransactionByTokenAddressUsingGET}
   * @param tokenAddress The NFT token address
   * @param params The query params {@link BaseNsPaginationReqParam}
   * @returns Promise<{@link CommonTransactionResponse}>
   */
  getTransactionsByTokenAddress(
    tokenAddress: string,
    params?: BaseNsPaginationReqParam,
  ): Promise<CommonTransactionResponse> {
    if (isEmpty(tokenAddress)) {
      return missingParamError('tokenAddress');
    }

    if (params) {
      const { limit } = params;
      if (limit && limit > 100) {
        return invalidLimitError(100);
      }
    }

    return nftscanGet<BaseNsPaginationReqParam, CommonTransactionResponse>(
      this.config,
      `${NftscanConst.API.solana.transaction.getTransactionsByTokenAddress}${tokenAddress}`,
      params,
    );
  }
}
