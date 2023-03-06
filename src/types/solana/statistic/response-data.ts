/**
 * The response data of Solana API 'getTradeRanking'
 */
export interface QueryTradeRankingResponse {
  /**
   * The average price
   */
  average_price: number;

  /**
   * The average price growth rate
   */
  average_price_change: string;

  /**
   * collection
   */
  collection: string;

  /**
   * The 24-hour trading volume growth rate
   */
  exchange_volume_change_24h: string;

  /**
   * The 7-day trading volume growth rate
   */
  exchange_volume_change_7d: string;

  /**
   * The highest price
   */
  highest_price: number;

  /**
   * How many items for the collection
   */
  items_total: number;

  /**
   * The logo URL
   */
  logo_url: string;

  /**
   * The lowest price
   */
  lowest_price: number;

  /**
   * The market cap
   */
  market_cap: number;

  /**
   * NFT market trend
   */
  market_trend: string;

  /**
   * The average mint price
   */
  mint_average_price: number;

  /**
   * The total mint gas fee
   */
  mint_gas_fee: number;

  /**
   * The total mint price
   */
  mint_price_total: number;

  /**
   * How many owners for the collection
   */
  owners_total: number;

  /**
   * How many sales
   */
  sales: number;

  /**
   * The volume
   */
  volume: number;

  /**
   * The volume growth rate
   */
  volume_change: string;
}

/**
 * The response data of Solana API 'getCollectionStatistics'
 */
export interface QueryCollectionStatisticsResponse {
  /**
   * The average price of 24h
   */
  average_price_24h: number;

  /**
   * The collection
   */
  collection: string;

  /**
   * The highest price
   */
  highest_price: number;

  /**
   * How many items for the collection
   */
  items_total: number;

  /**
   * The logo URL
   */
  logo_url: string;

  /**
   * The lowest price of 24h
   */
  lowest_price_24h: number;

  /**
   * How many owners for the collection
   */
  owners_total: number;

  /**
   * How many sales of 24h
   */
  sales_24h: number;

  /**
   * The total volume
   */
  total_volume: number;

  /**
   * The volume of 24h
   */
  volume_24h: number;
}
