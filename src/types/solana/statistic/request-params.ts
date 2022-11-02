import { RangeType, SortDirection } from '../../nftscan-type';

/**
 * The request parameters of Solana API 'getTradeRanking'
 */
export interface QueryTradeRankingParams {
  /**
   * The time range (15m 30m 1h 6h 12h 1d). 1d for default
   */
  time?: RangeType.M15 | RangeType.M30 | RangeType.H1 | RangeType.H6 | RangeType.H12 | RangeType.D1;

  /**
   * Can be volume or sales. volume for default
   */
  sort_field?: 'volume' | 'sales';

  /**
   * Can be asc or desc. desc for default
   */
  sort_direction?: SortDirection;
}
