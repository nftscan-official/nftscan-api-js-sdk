import { nftscanGet } from '../../../http/nftscan.http';
import { NftscanConfig } from '../../../types/nftscan-type';
import { QueryTradeRankingParams } from '../../../types/solana/statistic/request-params';
import { QueryTradeRankingResponse } from '../../../types/solana/statistic/response-data';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * Statistic related API
 */
export default class NftscanSolanaStatistic extends BaseApi<NftscanConfig> {
  /**
   * Obtain trade ranking statistics.
   * - This endpoint returns NFT trade ranking statistics referring to NFTScan Ranking({@link https://solana.nftscan.com/analytics/ranking})
   * - details: {@link https://docs.nftscan.com/solana/getTradeUsingGET}
   * @param params The query params {@link QueryTradeRankingParams}
   * @returns Promise<Array<{@link QueryTradeRankingResponse}>>
   */
  getTradeRanking(params?: QueryTradeRankingParams): Promise<Array<QueryTradeRankingResponse>> {
    return nftscanGet<QueryTradeRankingParams, Array<QueryTradeRankingResponse>>(
      this.config,
      `${NftscanConst.API.evm.statistic.getTradeRanking}`,
      params,
    );
  }
}
