import { nftscanGet } from '../../../http/nftscan.http';
import { NftscanConfig } from '../../../types/nftscan-type';
import { QueryTradeRankingParams } from '../../../types/solana/statistic/request-params';
import {
  QueryCollectionStatisticsResponse,
  QueryTradeRankingResponse,
} from '../../../types/solana/statistic/response-data';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * Statistic related API
 */
export default class NftscanSolanaStatistic extends BaseApi<NftscanConfig> {
  /**
   * Trade ranking
   * - This endpoint returns NFT trade ranking statistics referring to NFTScan Ranking({@link https://solana.nftscan.com/analytics/ranking})
   * - details: {@link https://docs.nftscan.com/reference/solana/trade-ranking}
   * @param params The query params {@link QueryTradeRankingParams}
   * @returns Promise<Array<{@link QueryTradeRankingResponse}>>
   */
  getTradeRanking(params?: QueryTradeRankingParams): Promise<Array<QueryTradeRankingResponse>> {
    return nftscanGet<QueryTradeRankingParams, Array<QueryTradeRankingResponse>>(
      this.config,
      `${NftscanConst.API.solana.statistic.getTradeRanking}`,
      params,
    );
  }

  /**
   * Collection Statistics
   * - This endpoint returns statistics for a collection referring to NFTScan Collection({@link https://solana.nftscan.com/Okay%20Bears})
   * - details: {@link https://docs.nftscan.com/reference/solana/collection-statistics}
   * @param collection The NFT collection for the assets
   * @returns Promise<Array<{@link QueryCollectionStatisticsResponse}>>
   */
  getCollectionStatistics(collection: string): Promise<Array<QueryCollectionStatisticsResponse>> {
    return nftscanGet<string, Array<QueryCollectionStatisticsResponse>>(
      this.config,
      `${NftscanConst.API.solana.statistic.getCollectionStatistics}${collection}`,
    );
  }
}
