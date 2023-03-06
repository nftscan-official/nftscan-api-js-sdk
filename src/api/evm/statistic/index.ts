import { nftscanGet } from '../../../http/nftscan.http';
import {
  QueryCollectionRankingParams,
  QueryMarketplaceRankingParams,
  QueryTradeRankingParams,
} from '../../../types/evm/statistic/request-params';
import {
  QueryAccountOverviewResponse,
  QueryBlueChipStatisticsResponse,
  QueryCollectionRankingResponse,
  QueryCollectionStatisticsResponse,
  QueryCollectionTradeResponse,
  QueryCollectionTrendingResponse,
  QueryGasRankingResponse,
  QueryMarketCapRankingResponse,
  QueryMarketplaceRankingResponse,
  QueryMintAmountResponse,
  QueryMintRankingResponse,
  QueryTradeRankingResponse,
  QueryTradersRankingResponse,
  CollectionOverviewResponse,
} from '../../../types/evm/statistic/response-data';
import { invalidLimitError, missingParamError } from '../../../types/nftscan-error';
import { NftscanConfig, NsObject, RangeType, TradeType } from '../../../types/nftscan-type';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * Statistic related API
 */
export default class NftscanEvmStatistic extends BaseApi<NftscanConfig> {
  /**
   * Trade ranking
   * - This endpoint returns NFT trade ranking statistics referring to NFTScan Ranking({@link https://www.nftscan.com/ranking})
   * - details: {@link https://docs.nftscan.com/reference/evm/trade-ranking}
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

  /**
   * *****
   * [PRO]
   * *****
   * Collection ranking
   * - This endpoint returns NFT collection ranking statistics.
   * - details: {@link https://docs.nftscan.com/reference/evm/collection-ranking}
   * @param params The query params {@link QueryCollectionRankingParams}
   * @returns Promise<Array<{@link QueryCollectionRankingResponse}>>
   */
  getCollectionRanking(params?: QueryCollectionRankingParams): Promise<Array<QueryCollectionRankingResponse>> {
    if (params) {
      const { limit } = params;

      if (limit && limit > 100) {
        return invalidLimitError(100);
      }
    }

    return nftscanGet<QueryCollectionRankingParams, Array<QueryCollectionRankingResponse>>(
      this.config,
      `${NftscanConst.API.evm.statistic.getCollectionRanking}`,
      params,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Collection trade distribution
   * - This endpoint returns NFT collection trade distribution referring to NFTScan Traded Distribution({@link https://www.nftscan.com/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?module=Analytics}).
   * - details: {@link https://docs.nftscan.com/reference/evm/collection-trade-distribution}
   * @param contractAddress The NFT contract address
   * @param time Can be 1h, 4h, 12h, 1d, 3d, 7d, 30d and 90d. 1d for default
   * @returns Promise<Array<{@link QueryCollectionTradeResponse}>>
   */
  getCollectionTrade(
    contractAddress: string,
    time?:
      | RangeType.H1
      | RangeType.H4
      | RangeType.H12
      | RangeType.D1
      | RangeType.D3
      | RangeType.D7
      | RangeType.D30
      | RangeType.D90,
  ): Promise<Array<QueryCollectionTradeResponse>> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    return nftscanGet<NsObject, Array<QueryCollectionTradeResponse>>(
      this.config,
      `${NftscanConst.API.evm.statistic.getCollectionTrade}${contractAddress}`,
      { time: time || RangeType.D1 },
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Collection trending statistics
   * - This endpoint returns NFT collection trending statistics referring to NFTScan Trending({@link https://www.nftscan.com/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?module=Analytics}).
   * - details: {@link https://docs.nftscan.com/reference/evm/collection-trending-statistics}
   * @param contractAddress The NFT contract address
   * @param time Can be 1h, 4h, 12h, 1d, 3d, 7d, 30d and 90d. 1d for default
   * @returns Promise<Array<{@link QueryCollectionTrendingResponse}>>
   */
  getCollectionTrending(
    contractAddress: string,
    time?:
      | RangeType.H1
      | RangeType.H4
      | RangeType.H12
      | RangeType.D1
      | RangeType.D3
      | RangeType.D7
      | RangeType.D30
      | RangeType.D90
      | RangeType.Y1
      | RangeType.ALL,
  ): Promise<Array<QueryCollectionTrendingResponse>> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    return nftscanGet<NsObject, Array<QueryCollectionTrendingResponse>>(
      this.config,
      `${NftscanConst.API.evm.statistic.getCollectionTrending}${contractAddress}`,
      { time: time || RangeType.D1 },
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Account overview
   * - This endpoint returns overview statistics for an account address referring to NFTScan Overview({@link https://www.nftscan.com/0xea7a0f1434084b2e99b42f045896e7326fed9dc1}).
   * - details: {@link https://docs.nftscan.com/reference/evm/account-overview}
   * @param accountAddress The account address
   * @returns Promise<{@link QueryAccountOverviewResponse}>
   */
  getAccountOverview(accountAddress: string): Promise<QueryAccountOverviewResponse> {
    if (isEmpty(accountAddress)) {
      return missingParamError('accountAddress');
    }

    return nftscanGet<NsObject, QueryAccountOverviewResponse>(
      this.config,
      `${NftscanConst.API.evm.statistic.getAccountOverview}${accountAddress}`,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Blue chip
   * - This endpoint returns blue chip statistics referring to({@link https://www.nftscan.com/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?module=Analytics}).
   * - details: {@link https://docs.nftscan.com/reference/evm/blue-chip}
   * @param contractAddress The NFT contract address
   * @returns Promise<{@link QueryBlueChipStatisticsResponse}>
   */
  getBlueChipStatistics(contractAddress: string): Promise<QueryBlueChipStatisticsResponse> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    return nftscanGet<NsObject, QueryBlueChipStatisticsResponse>(
      this.config,
      `${NftscanConst.API.evm.statistic.getBlueChipStatistics}${contractAddress}`,
    );
  }

  /**
   * Marketplace ranking
   * - This endpoint returns NFT marketplace ranking statistics referring to NFTScan Marketplace({@link https://www.nftscan.com/marketplace}).
   * - details: {@link https://docs.nftscan.com/reference/evm/marketplace-ranking}
   * @param params The query params {@link QueryMarketplaceRankingParams}
   * @returns Promise<Array<{@link QueryMarketplaceRankingResponse}>>
   */
  getMarketplaceRanking(params?: QueryMarketplaceRankingParams): Promise<Array<QueryMarketplaceRankingResponse>> {
    return nftscanGet<QueryMarketplaceRankingParams, Array<QueryMarketplaceRankingResponse>>(
      this.config,
      `${NftscanConst.API.evm.statistic.getMarketplaceRanking}`,
      params,
    );
  }

  /**
   * Market cap ranking
   * - This endpoint returns NFT market cap ranking statistics.
   * - details: {@link https://docs.nftscan.com/reference/evm/market-cap-ranking}
   * @returns Promise<Array<{@link QueryMarketCapRankingResponse}>>
   */
  getMarketCapRanking(): Promise<Array<QueryMarketCapRankingResponse>> {
    return nftscanGet<NsObject, Array<QueryMarketCapRankingResponse>>(
      this.config,
      `${NftscanConst.API.evm.statistic.getMarketCapRanking}`,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Collection statistics
   * - This endpoint returns statistics for a collection referring to NFTScan Collection({@link https://www.nftscan.com/search/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d}).
   * - details: {@link https://docs.nftscan.com/reference/evm/collection-statistics}
   * @param contractAddress The NFT contract address
   * @returns Promise<{@link QueryCollectionStatisticsResponse}>
   */
  getCollectionStatistics(contractAddress: string): Promise<QueryCollectionStatisticsResponse> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    return nftscanGet<NsObject, QueryCollectionStatisticsResponse>(
      this.config,
      `${NftscanConst.API.evm.statistic.getCollectionStatistics}${contractAddress}`,
    );
  }

  /**
   * Mint ranking
   * - This endpoint returns NFT mint ranking statistics referring to NFTScan Discover({@link https://www.nftscan.com/analytics/discover}) for the section of 'Top Mints'.
   * - details: {@link https://docs.nftscan.com/reference/evm/mint-ranking}
   * @param time The time range (1h 6h 12h 1d 3d). 1d for default
   * @returns Promise<Array<{@link QueryMintRankingResponse}>>
   */
  getMintRanking(
    time?: RangeType.H1 | RangeType.H6 | RangeType.H12 | RangeType.D1 | RangeType.D3,
  ): Promise<Array<QueryMintRankingResponse>> {
    return nftscanGet<NsObject, Array<QueryMintRankingResponse>>(
      this.config,
      `${NftscanConst.API.evm.statistic.getMintRanking}`,
      { time: time || RangeType.D1 },
    );
  }

  /**
   * Mint amount
   * - This endpoint returns NFT mint amount statistics referring to NFTScan Discover({@link https://www.nftscan.com/analytics/discover}) for the section of 'Amount of New NFTs'.
   * - details: {@link https://docs.nftscan.com/reference/evm/mint-amount}
   * @param time The time range (1h 6h 12h 1d 3d 7d 30d). 1d for default
   * @returns Promise<{@link QueryMintAmountResponse}>
   */
  getMintAmount(
    time?: RangeType.H1 | RangeType.H6 | RangeType.H12 | RangeType.D1 | RangeType.D3 | RangeType.D7 | RangeType.D30,
  ): Promise<QueryMintAmountResponse> {
    return nftscanGet<NsObject, QueryMintAmountResponse>(
      this.config,
      `${NftscanConst.API.evm.statistic.getMintAmount}`,
      { time: time || RangeType.D1 },
    );
  }

  /**
   * Traders ranking
   * - This endpoint returns NFT traders ranking statistics referring to NFTScan Discover({@link https://www.nftscan.com/analytics/discover}) for the section of 'Top Traders'.
   * - details: {@link https://docs.nftscan.com/reference/evm/traders-ranking}
   * @param time The time range (1h 6h 12h 1d 3d). 1d for default
   * @param tradeType Can be buy or sell. buy for default
   * @returns Promise<Array<{@link QueryTradersRankingResponse}>>
   */
  getTradersRanking(
    time?: RangeType.H1 | RangeType.H6 | RangeType.H12 | RangeType.D1 | RangeType.D3,
    tradeType?: TradeType,
  ): Promise<Array<QueryTradersRankingResponse>> {
    return nftscanGet<NsObject, Array<QueryTradersRankingResponse>>(
      this.config,
      `${NftscanConst.API.evm.statistic.getTradersRanking}`,
      { time: time || RangeType.D1, trade_type: tradeType || TradeType.BUY },
    );
  }

  /**
   * Gas ranking
   * - This endpoint returns NFT gas ranking statistics referring to NFTScan Gas Tracker({@link https://www.nftscan.com/analytics/tracker}).
   * - details: {@link https://docs.nftscan.com/reference/evm/gas-ranking}
   * @param show24hTrends Whether to obtain 24-hour gas fee trend data.
   * @returns Promise<Array<{@link QueryGasRankingResponse}>>
   */
  getGasRanking(show24hTrends?: boolean): Promise<Array<QueryGasRankingResponse>> {
    return nftscanGet<NsObject, Array<QueryGasRankingResponse>>(
      this.config,
      `${NftscanConst.API.evm.statistic.getGasRanking}`,
      { show_24h_trends: !!show24hTrends },
    );
  }

  /**
   * Collection overview
   * - This endpoint returns collection overview data.
   * - details: {@link https://docs.nftscan.com/reference/evm/collection-overview}
   * @returns Promise<{@link CollectionOverviewResponse}>
   */
  getCollectionOverview(): Promise<CollectionOverviewResponse> {
    return nftscanGet<NsObject, CollectionOverviewResponse>(
      this.config,
      `${NftscanConst.API.evm.statistic.getCollectionOverview}`,
    );
  }
}
