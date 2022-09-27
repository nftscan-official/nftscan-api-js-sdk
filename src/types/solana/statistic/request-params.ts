import { RangeType, SortDirection } from '../../nftscan-type';

/**
 * The request parameters of Solana API 'getTradeRanking'
 */
export interface QueryTradeRankingParams {
  /**
   * The time range (15m 30m 1h 6h 12h 1d). 1d for default
   */
  time?: RangeType.m15 | RangeType.m30 | RangeType.h1 | RangeType.h6 | RangeType.h12 | RangeType.d1;

  /**
   * Can be volume or sales. volume for default
   */
  sort_field?: 'volume' | 'sales';

  /**
   * Can be asc or desc. desc for default
   */
  sort_direction?: SortDirection;
}
