import { nftscanGet } from '../../../http/nftscan.http';
import {
  QueryCollectionRankingParams,
  QueryMarketplaceRankingParams,
  QueryTradeRankingParams,
} from '../../../types/evm/statistic/request-params';
import {
  QueryAccountOverviewResponse,
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
  QueryVolumeIn24hResponse,
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
   * Obtain trade ranking statistics.
   * - This endpoint returns NFT trade ranking statistics referring to NFTScan Ranking({@link https://www.nftscan.com/ranking})
   * - details: {@link https://docs.nftscan.com/nftscan/getTradeUsingGET_1}
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
   * Obtain collection ranking statistics.
   * - This endpoint returns NFT collection ranking statistics.
   * - details: {@link https://docs.nftscan.com/nftscan/collectionRankingUsingGET}
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
   * Obtain collection trade distribution.
   * - This endpoint returns NFT collection trade distribution referring to NFTScan Traded Distribution({@link https://www.nftscan.com/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?module=Analytics}).
   * - details: {@link https://docs.nftscan.com/nftscan/tradeDistributionUsingGET}
   * @param contractAddress The NFT contract address
   * @param time Can be 1h, 4h, 12h, 1d, 3d, 7d, 30d and 90d. 1d for default
   * @returns Promise<Array<{@link QueryCollectionTradeResponse}>>
   */
  getCollectionTrade(
    contractAddress: string,
    time?:
      | RangeType.h1
      | RangeType.h4
      | RangeType.h12
      | RangeType.d1
      | RangeType.d3
      | RangeType.d7
      | RangeType.d30
      | RangeType.d90,
  ): Promise<Array<QueryCollectionTradeResponse>> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    return nftscanGet<NsObject, Array<QueryCollectionTradeResponse>>(
      this.config,
      `${NftscanConst.API.evm.statistic.getCollectionTrade}${contractAddress}`,
      { time: time || RangeType.d1 },
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Obtain collection trending statistics.
   * - This endpoint returns NFT collection trending statistics referring to NFTScan Trending({@link https://www.nftscan.com/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?module=Analytics}).
   * - details: {@link https://docs.nftscan.com/nftscan/trendingUsingGET_1}
   * @param contractAddress The NFT contract address
   * @param time Can be 1h, 4h, 12h, 1d, 3d, 7d, 30d and 90d. 1d for default
   * @returns Promise<Array<{@link QueryCollectionTrendingResponse}>>
   */
  getCollectionTrending(
    contractAddress: string,
    time?:
      | RangeType.h1
      | RangeType.h4
      | RangeType.h12
      | RangeType.d1
      | RangeType.d3
      | RangeType.d7
      | RangeType.d30
      | RangeType.d90,
  ): Promise<Array<QueryCollectionTrendingResponse>> {
    if (isEmpty(contractAddress)) {
      return missingParamError('contractAddress');
    }

    return nftscanGet<NsObject, Array<QueryCollectionTrendingResponse>>(
      this.config,
      `${NftscanConst.API.evm.statistic.getCollectionTrending}${contractAddress}`,
      { time: time || RangeType.d1 },
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Obtain account overview statistics.
   * - This endpoint returns overview statistics for an account address referring to NFTScan Overview({@link https://www.nftscan.com/0xea7a0f1434084b2e99b42f045896e7326fed9dc1}).
   * - details: {@link https://docs.nftscan.com/nftscan/trendingUsingGET}
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
   * Obtain marketplace ranking statistics.
   * - This endpoint returns NFT marketplace ranking statistics referring to NFTScan Marketplace({@link https://www.nftscan.com/marketplace}).
   * - details: {@link https://docs.nftscan.com/nftscan/getMarketplaceUsingGET}
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
   * Obtain market cap ranking statistics
   * - This endpoint returns NFT market cap ranking statistics.
   * - details: {@link https://docs.nftscan.com/nftscan/getMarketCapUsingGET}
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
   * Obtain collection statistics.
   * - This endpoint returns statistics for a collection referring to NFTScan Collection({@link https://www.nftscan.com/search/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d}).
   * - details: {@link https://docs.nftscan.com/nftscan/getCollectionUsingGET_2}
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
   * Obtain mint ranking statistics.
   * - This endpoint returns NFT mint ranking statistics referring to NFTScan Discover({@link https://www.nftscan.com/analytics/discover}) for the section of 'Top Mints'.
   * - details: {@link https://docs.nftscan.com/nftscan/getMintUsingGET}
   * @param time The time range (1h 6h 12h 1d 3d). 1d for default
   * @returns Promise<Array<{@link QueryMintRankingResponse}>>
   */
  getMintRanking(
    time?: RangeType.h1 | RangeType.h6 | RangeType.h12 | RangeType.d1 | RangeType.d3,
  ): Promise<Array<QueryMintRankingResponse>> {
    return nftscanGet<NsObject, Array<QueryMintRankingResponse>>(
      this.config,
      `${NftscanConst.API.evm.statistic.getMintRanking}`,
      { time: time || RangeType.d1 },
    );
  }

  /**
   * Obtain mint amount statistics.
   * - This endpoint returns NFT mint amount statistics referring to NFTScan Discover({@link https://www.nftscan.com/analytics/discover}) for the section of 'Amount of New NFTs'.
   * - details: {@link https://docs.nftscan.com/nftscan/getAmountUsingGET}
   * @param time The time range (1h 6h 12h 1d 3d 7d 30d). 1d for default
   * @returns Promise<{@link QueryMintAmountResponse}>
   */
  getMintAmount(
    time?: RangeType.h1 | RangeType.h6 | RangeType.h12 | RangeType.d1 | RangeType.d3 | RangeType.d7 | RangeType.d30,
  ): Promise<QueryMintAmountResponse> {
    return nftscanGet<NsObject, QueryMintAmountResponse>(
      this.config,
      `${NftscanConst.API.evm.statistic.getMintAmount}`,
      { time: time || RangeType.d1 },
    );
  }

  /**
   * Obtain traders ranking statistics.
   * - This endpoint returns NFT traders ranking statistics referring to NFTScan Discover({@link https://www.nftscan.com/analytics/discover}) for the section of 'Top Traders'.
   * - details: {@link https://docs.nftscan.com/nftscan/getTradersUsingGET}
   * @param time The time range (1h 6h 12h 1d 3d). 1d for default
   * @param tradeType Can be buy or sell. buy for default
   * @returns Promise<Array<{@link QueryTradersRankingResponse}>>
   */
  getTradersRanking(
    time?: RangeType.h1 | RangeType.h6 | RangeType.h12 | RangeType.d1 | RangeType.d3,
    tradeType?: TradeType,
  ): Promise<Array<QueryTradersRankingResponse>> {
    return nftscanGet<NsObject, Array<QueryTradersRankingResponse>>(
      this.config,
      `${NftscanConst.API.evm.statistic.getTradersRanking}`,
      { time: time || RangeType.d1, trade_type: tradeType || TradeType.BUY },
    );
  }

  /**
   * Obtain traders ranking statistics.
   * - This endpoint returns NFT gas ranking statistics referring to NFTScan Gas Tracker({@link https://www.nftscan.com/analytics/tracker}).
   * - details: {@link https://docs.nftscan.com/nftscan/getGasUsingGET}
   * @returns Promise<Array<{@link QueryGasRankingResponse}>>
   */
  getGasRanking(): Promise<Array<QueryGasRankingResponse>> {
    return nftscanGet<NsObject, Array<QueryGasRankingResponse>>(
      this.config,
      `${NftscanConst.API.evm.statistic.getGasRanking}`,
    );
  }

  /**
   * Obtain 24h volume statistics.
   * - This endpoint returns NFT volume statistics for 24h.
   * - details: {@link https://docs.nftscan.com/nftscan/get24hUsingGET}
   * @returns Promise<{@link QueryVolumeIn24hResponse}>
   */
  getVolumeIn24h(): Promise<QueryVolumeIn24hResponse> {
    return nftscanGet<NsObject, QueryVolumeIn24hResponse>(
      this.config,
      `${NftscanConst.API.evm.statistic.getVolumeIn24h}`,
    );
  }
}
