interface Price7d {
  /**
   * The average price
   */
  average_price: number;

  /**
   * The beginning timestamp in milliseconds for the interval
   */
  begin_timestamp: number;

  /**
   * The ending timestamp in milliseconds for the interval
   */
  end_timestamp: number;
}

interface volume7d {
  /**
   * The volume
   */
  volume: number;

  /**
   * The beginning timestamp in milliseconds for the interval
   */
  begin_timestamp: number;

  /**
   * The ending timestamp in milliseconds for the interval
   */
  end_timestamp: number;
}

/**
 * The response parameters of EVM API 'getTradeRanking'
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
   * The contract address
   */
  contract_address: string;

  /**
   * The contract name
   */
  contract_name: string;

  /**
   * The 24-hour trading volume growth rate
   */
  exchange_volume_change_24h: string;

  /**
   * The 7-day trading volume growth rate
   */
  exchange_volume_change_7d: string;

  /**
   * The floor price
   */
  floor_price: number;

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
   * The market cap growth rate
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
   * The 7-day trading price trends
   */
  price_7d: Array<Price7d>;

  /**
   * How many sales
   */
  sales: number;

  /**
   * The volume
   */
  volume: number;

  /**
   * The 7-day trading volume trends
   */
  volume_7d: Array<volume7d>;

  /**
   * The volume growth rate
   */
  volume_change: string;
}

/**
 * The response parameters of EVM API 'getCollectionRanking'
 */
export interface QueryCollectionRankingResponse {
  /**
   * The average price for 1 day
   */
  average_price_1d: number;

  /**
   * The average price for 30 days
   */
  average_price_30d: number;

  /**
   * The average price for 7 days
   */
  average_price_7d: number;

  /**
   * The average price for total
   */
  average_price_total: number;

  /**
   * The banner URL
   */
  banner_url: string;

  /**
   * The contract address
   */
  contract_address: string;

  /**
   * The contract name
   */
  contract_name: string;

  /**
   * The floor price or lowest price
   */
  floor_price: number;

  /**
   * How many items for the collection
   */
  items_total: number;

  /**
   * The logo URL
   */
  logo_url: string;

  /**
   * How many owners for the collection
   */
  owners_total: number;

  /**
   * How many sales for total
   */
  sales_total: number;

  /**
   * The volume for 1 day
   */
  volume_1d: number;

  /**
   * The volume for 30 days
   */
  volume_30d: number;

  /**
   * The volume for 7 days
   */
  volume_7d: number;

  /**
   * The volume growth rate for 1 day
   */
  volume_change_1d: string;

  /**
   * The volume growth rate for 7 days
   */
  volume_change_7d: string;

  /**
   * The total volume
   */
  volume_total: number;
}

/**
 * The response parameters of EVM API 'getCollectionTrade'
 */
export interface QueryCollectionTradeResponse {
  /**
   * The NFT trading exchange name
   */
  exchange_name: string;

  /**
   * The timestamp in milliseconds of the transaction
   */
  timestamp: number;

  /**
   * The trade price of the transaction in Number
   */
  trade_price: number;

  /**
   * The transaction hash
   */
  transaction_hash: string;
}

/**
 * The response parameters of EVM API 'getCollectionTrending'
 */
export interface QueryCollectionTrendingResponse {
  /**
   * The average price
   */
  average_price: number;

  /**
   * The beginning timestamp in milliseconds for the interval
   */
  begin_timestamp: number;

  /**
   * The ending timestamp in milliseconds for the interval
   */
  end_timestamp: number;

  /**
   * The volume
   */
  volume: number;
}

/**
 * The response parameters of EVM API 'getAccountOverview'
 */
export interface QueryAccountOverviewResponse {
  /**
   * The number of NFTs bought
   */
  bought_count: number;

  /**
   * The value of NFTs bought
   */
  bought_value: number;

  /**
   * The usdt value of NFTs bought
   */
  bought_value_usdt: number;

  /**
   * The number of NFTs burnt
   */
  burn_count: number;

  /**
   * The value of operating NFTs gas fee
   */
  gas_value: number;

  /**
   * The usdt value of operating NFTs gas fee
   */
  gas_value_usdt: number;

  /**
   * The number of NFTs held
   */
  holding_count: number;

  /**
   * The value of NFTs held
   */
  holding_value: number;

  /**
   * The usdt value of NFTs held
   */
  holding_value_usdt: number;

  /**
   * The number of NFTs minted
   */
  mint_count: number;

  /**
   * The number of NFTs received
   */
  receive_count: number;

  /**
   * The number of NFTs send
   */
  send_count: number;

  /**
   * The number of NFTs sold
   */
  sold_count: number;

  /**
   * The value of NFTs sold
   */
  sold_value: number;

  /**
   * The usdt value of NFTs sold
   */
  sold_value_usdt: number;
}

/**
 * The response parameters of EVM API 'getMarketplaceRanking'
 */
export interface QueryMarketplaceRankingResponse {
  /**
   * The contract name
   */
  contract_name: string;

  /**
   * The contracts of the NFT trading marketplace
   */
  contracts: Array<string>;

  /**
   * The gas
   */
  gas: number;

  /**
   * The logo URL
   */
  logo_url: string;

  /**
   * How many sales
   */
  sales: number;

  /**
   * The volume
   */
  volume: number;

  /**
   * The volume growth rate for 1 day
   */
  volume1d_change: string;

  /**
   * The volume growth rate for 30 day
   */
  volume30d_change: string;

  /**
   * The volume growth rate for 7 day
   */
  volume7d_change: string;

  /**
   * How many wallets
   */
  wallets: number;
}

/**
 * The response parameters of EVM API 'getMarketCapRanking'
 */
export interface QueryMarketCapRankingResponse {
  /**
   * The average market price
   */
  average_market_price: number;

  /**
   * The contract address
   */
  contract_address: string;

  /**
   * The contract name
   */
  contract_name: string;

  /**
   * The total count of NFT items
   */
  items_total: number;

  /**
   * The logo URL
   */
  logo_url: string;

  /**
   * The market cap
   */
  market_cap: number;
}

/**
 * The response parameters of EVM API 'getCollectionStatistics'
 */
export interface QueryCollectionStatisticsResponse {
  /**
   * The 24h average price
   */
  average_price_24h: number;

  /**
   * The contract address
   */
  contract_address: string;

  /**
   * The contract name
   */
  contract_name: string;

  /**
   * The erc type of the collection
   */
  erc_type: string;

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
   * The 24h lowest price
   */
  lowest_price_24h: number;

  /**
   * How many owners for the collection
   */
  owners_total: number;

  /**
   * The 24h sales
   */
  sales_24h: number;

  /**
   * The total volume
   */
  total_volume: number;

  /**
   * The 24h volume
   */
  volume_24h: number;
}

/**
 * The response parameters of EVM API 'getMintRanking'
 */
export interface QueryMintRankingResponse {
  /**
   * The contract address
   */
  contract_address: string;

  /**
   * The contract name
   */
  contract_name: string;

  /**
   * The logo URL
   */
  logo_url: string;

  /**
   * How many items were minted
   */
  mint_total: number;
}

/**
 * The response parameters of EVM API 'getMintAmount'
 */
export interface QueryMintAmountResponse {
  /**
   * The mint amount
   */
  amount: number;
}

/**
 * The response parameters of EVM API 'getTradersRanking'
 */
export interface QueryTradersRankingResponse {
  /**
   * The account address
   */
  account_address: string;

  /**
   * How many trades
   */
  trades_total: number;

  /**
   * The volume
   */
  volume: number;
}

/**
 * The response parameters of EVM API 'getGasRanking'
 */
export interface QueryGasRankingResponse {
  /**
   * The contract address
   */
  contract_address: string;

  /**
   * The contract name
   */
  contract_name: string;

  /**
   * The gas fee for 12 hour
   */
  gas_fee_12h: number;

  /**
   * The gas fee for 1 hour
   */
  gas_fee_1h: number;

  /**
   * The gas fee for 24 hour
   */
  gas_fee_24h: number;

  /**
   * The logo URL
   */
  logo_url: string;
}

/**
 * The response parameters of EVM API 'getVolumeIn24h'
 */
export interface QueryVolumeIn24hResponse {
  /**
   * The total volume
   */
  total_volume: number;

  /**
   * The growth rate of the total volume in the last 24h
   */
  volume_growth_rate_24h: string;
}
