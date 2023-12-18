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

interface Volume7d {
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

interface Gas24h {
  /**
   * The gas cost
   */
  gas: number;

  /**
   * The time hour
   */
  time: number;
}

interface CollectionDistribution {
  /**
   * The name or type
   */
  name: string;

  /**
   * The proportion of holdings
   */
  proportion: string;

  /**
   * The value(amount or volume)
   */
  value: number;
}

interface AccountDistribution {
  /**
   * The contract address
   */
  contract: string;

  /**
   * The contract name
   */
  name: string;

  /**
   * The proportion of holdings
   */
  proportion: string;

  /**
   * The value(amount or volume)
   */
  value: number;
}

/**
 * The response data of EVM API 'getTradeRanking'
 */
export interface QueryTradeRankingResponse {
  /**
   * How many amount for the collection(only for ERC1155)
   */
  amounts_total: number;

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
   * The sale growth rate
   */
  sales_change: string;

  /**
   * The volume
   */
  volume: number;

  /**
   * The 7-day trading volume trends
   */
  volume_7d: Array<Volume7d>;

  /**
   * The volume growth rate
   */
  volume_change: string;
}

/**
 * The response data of EVM API 'getCollectionRanking'
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
   * The average price growth rate for 1 day
   */
  average_price_change_1d: string;

  /**
   * The average price growth rate for 30 days
   */
  average_price_change_30d: string;

  /**
   * The average price growth rate for 7 days
   */
  average_price_change_7d: string;

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
   * The market cap
   */
  market_cap: number;

  /**
   * Whether the collection is verified on OpenSea
   */
  opensea_verified: boolean;

  /**
   * How many owners for the collection
   */
  owners_total: number;

  /**
   * How many sales for 1 day
   */
  sales_1d: number;

  /**
   * How many sales for 30 days
   */
  sales_30d: number;

  /**
   * How many sales for 7 days
   */
  sales_7d: number;

  /**
   * The sale growth rate for 1 day
   */
  sales_change_1d: string;

  /**
   * The sale growth rate for 30 days
   */
  sales_change_30d: string;

  /**
   * The sale growth rate for 7 days
   */
  sales_change_7d: string;

  /**
   * How many sales for total
   */
  sales_total: number;

  /**
   * Whether the collection is verified on NFTScan
   */
  verified: boolean;

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
   * The volume growth rate for 30 days
   */
  volume_change_30d: string;

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
 * The response data of EVM API 'getCollectionTrade'
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
 * The response data of EVM API 'getCollectionTrending'
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
 * The response data of EVM API 'getCollectionTopHolder'
 */
export interface QueryCollectionTopHolderResponse {
  /**
   * The holder
   */
  address: string;

  /**
   * The percentage of the project held by the holder
   */
  proportion: string;

  /**
   * The total number of NFTs held by the holder
   */
  value: number;
}

/**
 * The response data of EVM API 'getAccountOverview'
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
   * The number of collections for NFT
   */
  collection_count: number;

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
 * The response data of EVM API 'getMarketplaceRanking'
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
   * The handling fee
   */
  handling_fee: string;

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
 * The response data of EVM API 'getMarketCapRanking'
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
 * The response data of EVM API 'getCollectionStatistics'
 */
export interface QueryCollectionStatisticsResponse {
  /**
   * The 24h average price
   */
  average_price_24h: number;

  /**
   * The average price growth rate for 1 day
   */
  average_price_change_1d: string;

  /**
   * The average price growth rate for 30 days
   */
  average_price_change_30d: string;

  /**
   * The average price growth rate for 7 days
   */
  average_price_change_7d: string;

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
   * The floor price of the collection
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
   * The 24h lowest price
   */
  lowest_price_24h: number;

  /**
   * The market cap
   */
  market_cap: number;

  /**
   * Percentage of owners of this collection who have at least one Blue Chip NFT
   */
  next_blue_chip_probability: string;

  /**
   * How many owners for the collection
   */
  owners_total: number;

  /**
   * The total sales
   */
  sales: number;

  /**
   * The sale for 1 day
   */
  sales_1d: number;

  /**
   * The sale for 1 hour
   */
  sales_1h: number;

  /**
   * The 24h sales
   */
  sales_24h: number;

  /**
   * The sale for 30 days
   */
  sales_30d: number;

  /**
   * The sale for 6 hours
   */
  sales_6h: number;

  /**
   * The sale for 7 days
   */
  sales_7d: number;

  /**
   * The total volume
   */
  total_volume: number;

  /**
   * The volume for 1 day
   */
  volume_1d: number;

  /**
   * The volume for 1 hour
   */
  volume_1h: number;

  /**
   * The 24h volume
   */
  volume_24h: number;

  /**
   * The volume for 30 days
   */
  volume_30d: number;

  /**
   * The volume for 6 hours
   */
  volume_6h: number;

  /**
   * The volume for 7 days
   */
  volume_7d: number;

  /**
   * The volume growth rate for 1 day
   */
  volume_change_1d: string;

  /**
   * The volume growth rate for 1 hour
   */
  volume_change_1h: string;

  /**
   * The volume growth rate for 30 days
   */
  volume_change_30d: string;

  /**
   * The volume growth rate for 6 hours
   */
  volume_change_6h: string;

  /**
   * The volume growth rate for 7 days
   */
  volume_change_7d: string;
}

/**
 * The response data of EVM API 'getBlueChipStatistics'
 */
export interface QueryBlueChipStatisticsResponse {
  /**
   * How many owners who have at least one Blue Chip NFT for the collection.
   */
  blue_chip_owner: number;

  /**
   * Percentage of owners of this collection who have at least one Blue Chip NFT
   */
  next_blue_chip_probability: string;

  /**
   * How many owners for the collection
   */
  owner: number;
}

/**
 * The response data of EVM API 'getMintRanking'
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
   * The floor price or lowest price
   */
  floor_price: number;

  /**
   * The logo URL
   */
  logo_url: string;

  /**
   * The mint cost
   */
  mint_cost: number;

  /**
   * How many items were minted
   */
  mint_total: number;

  /**
   * The mint total growth rate
   */
  mint_total_change: string;

  /**
   * How many items were sold
   */
  sale_total: number;
}

/**
 * The response data of EVM API 'getMintAmount'
 */
export interface QueryMintAmountResponse {
  /**
   * The mint amount
   */
  amount: number;
}

/**
 * The response data of EVM API 'getTradersRanking'
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
 * The response data of EVM API 'getGasRanking'
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
   * The 24-hour gas fee trend data
   */
  gas_24h: Array<Gas24h>;

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
 * The response data of EVM API 'getCollectionOverview'
 */
export interface CollectionOverviewResponse {
  /**
   * The contract address
   */
  contract_address: string;

  /**
   * The contract name
   */
  contract_name: string;

  /**
   * The floor price of the collection
   */
  floor_price: number;
}

/**
 * The response data of EVM API 'getWalletRanking'
 */
export interface WalletRankingResponse {
  /**
   * The account address.
   */
  account_address: string;

  /**
   * The valuation of buying NFTs.
   */
  buy_volume: number;

  /**
   * The amount of holding collection.
   */
  holding_collections: number;

  /**
   * The amount of holding NFT.
   */
  holding_nfts: number;

  /**
   * The valuation of holding NFTs. (Total valuation = sum of floor prices of holding NFTs).
   */
  holding_volume: number;

  /**
   * The gains of NFT tradings. (Gains = sum of prices of sold NFTs - sum of prices of purchased NFTs).
   */
  realized_gains_volume: number;

  /**
   * The valuation of selling NFTs.
   */
  sell_volume: number;

  /**
   * The count of trading NFTs.
   */
  trade_count: number;
}

/**
 * The response data of EVM API 'getTradeWalletRanking'
 */
export interface TradeWalletRankingResponse {
  /**
   * The account address.
   */
  account_address: string;

  /**
   * The count of trading NFTs.
   */
  trade_count: number;

  /**
   * The valuation of trading(including buy and sell) NFTs.
   */
  trade_volume: number;

  /**
   * The USDC valuation of trading(including buy and sell) NFTs.
   */
  trade_volume_usdc: number;
}

/**
 * The response data of EVM API 'getCollectionHoldingAmountDistribution | getCollectionHoldingPeriodDistribution'
 */
export interface CollectionHoldingDistributionResponse {
  /**
   * The owner holding distribution
   */
  distribution: Array<CollectionDistribution>;

  /**
   * The total holding amount
   */
  total: number;
}

/**
 * The response data of EVM API 'getCollectionBlueChipList'
 */
export interface CollectionBlueChipListResponse {
  /**
   * The contract address
   */
  contract: string;

  /**
   * The logo
   */
  logo: string;

  /**
   * The number of wallet addresses holding this blue chip and this collection at the same time.
   */
  mutual_holders: number;

  /**
   * The name
   */
  name: string;

  /**
   * The total number of all NFTs held by mutual holders.
   */
  nft_count: number;

  /**
   * Whether the collection is verified on OpenSea
   */
  opensea_verified: boolean;

  /**
   * Whether the collection is verified on NFTScan
   */
  verified: boolean;
}

/**
 * The response data of EVM API 'getAccountHoldingDistribution'
 */
export interface AccountHoldingDistributionResponse {
  /**
   * The NFT holding distribution
   */
  distribution: Array<AccountDistribution>;

  /**
   * The total volume or amount
   */
  total: number;
}

/**
 * The response data of EVM API 'getAccountHoldingTrending'
 */
export interface AccountHoldingTrendingResponse {
  /**
   * The timestamp held
   */
  timestamp: number;

  /**
   * The quantity(or volume) held
   */
  value: number;
}

/**
 * The response data of EVM API 'getChainOverview'
 */
export interface ChainOverviewResponse {
  /**
   * The 24-hour total number of assets
   */
  asset_24h: number;

  /**
   * The total number of assets
   */
  asset_total: number;

  /**
   * The 24-hour total number of contracts
   */
  contract_24h: number;

  /**
   * The total number of contracts
   */
  contract_total: number;

  /**
   * The 24-hour total number of transactions
   */
  transfer_24h: number;

  /**
   * The total number of transactions
   */
  transfer_total: number;

  /**
   * The 24-hour total volume on the NFT Marketplaces
   */
  volume_24h: number;

  /**
   * The total volume on the NFT Marketplaces
   */
  volume_total: number;

  /**
   * The 1-day total number of wallet addresses
   */
  wallet_address_1d: number;

  /**
   * The total number of wallet addresses
   */
  wallet_address_total: number;
}
