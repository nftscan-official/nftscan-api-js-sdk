export default class NftscanConst {
  /**
   * NFTScan's API base url
   */
  static readonly BASE_URL = {
    eth: 'https://restapi.nftscan.com/api',
    bnb: 'https://bnbapi.nftscan.com/api',
    polygon: 'https://polygonapi.nftscan.com/api',
    optimism: 'https://optimismapi.nftscan.com/api',
    mint: 'https://mintapi.nftscan.com/api',
    arbitrum: 'https://arbitrumapi.nftscan.com/api',
    zksync: 'https://zksyncapi.nftscan.com/api',
    linea: 'https://lineaapi.nftscan.com/api',
    mantle: 'https://mantleapi.nftscan.com/api',
    starknet: 'https://starknetapi.nftscan.com/api',
    base: 'https://baseapi.nftscan.com/api',
    sei: 'https://seiapi.nftscan.com/api',
    gravity: 'https://gravityapi.nftscan.com/api',
    bera: 'https://beraapi.nftscan.com/api',
    avalanche: 'https://avaxapi.nftscan.com/api',
    viction: 'https://victionapi.nftscan.com/api',
    cronos: 'https://cronosapi.nftscan.com/api',
    solana: 'https://solanaapi.nftscan.com/api',
  };

  /**
   * NFTScan's API url
   */
  static readonly API = {
    evm: {
      assets: {
        getAssetsByAccount: '/v2/account/own/',
        getAllAssets: '/v2/account/own/all/',
        getAccountMinted: '/v2/account/mint/',
        getAssets: '/v2/assets/',
        getMultiChainAssets: '/v2/assets/chain/',
        queryAssetsInBatches: '/v2/assets/batch',
        queryAssetsByFilters: '/v2/assets/filters',
        queryAssetsByAttributes: '/v2/assets/attributes',
      },
      transaction: {
        getTransactionsByAccount: '/v2/transactions/account/',
        getTransactions: '/v2/transactions/',
        getTransactionsByToAddress: '/v2/transactions/to/',
        queryTransactionsByFilters: '/v2/transactions/filters',
        queryTransactionsByTxHashList: '/v2/transactions/txhash',
      },
      collection: {
        getCollectionsByContract: '/v2/collections/',
        getCollectionsByRanking: '/v2/collections/rankings',
        queryCollectionsByFilters: '/v2/collections/filters',
        queryCollectionsByAccountAddress: '/v2/collections/own/',
      },
      statistic: {
        getTradeRanking: '/v2/statistics/ranking/trade',
        getCollectionRanking: '/v2/statistics/ranking/collection',
        getCollectionTrade: '/v2/statistics/collection/trade/',
        getCollectionTrending: '/v2/statistics/collection/trending/',
        getCollectionTopHolder: '/v2/statistics/collection/holder/',
        getAccountOverview: '/v2/statistics/overview/',
        getBlueChipStatistics: '/v2/statistics/blue/chip/',
        getMarketplaceRanking: '/v2/statistics/ranking/marketplace',
        getMarketCapRanking: '/v2/statistics/ranking/marketcap',
        getCollectionStatistics: '/v2/statistics/collection/',
        getMintRanking: '/v2/statistics/ranking/mint',
        getMintAmount: '/v2/statistics/mint/amount',
        getTradersRanking: '/v2/statistics/ranking/traders',
        getGasRanking: '/v2/statistics/ranking/gas',
        getCollectionOverview: '/v2/statistics/collection/overview',
        getWalletRanking: '/v2/statistics/ranking/wallet',
        getTradeWalletRanking: '/v2/statistics/ranking/trade/wallet',
        getCollectionHoldingAmountDistribution: '/v2/statistics/amount/distribution/',
        getCollectionHoldingPeriodDistribution: '/v2/statistics/period/distribution/',
        getCollectionBlueChipList: '/v2/statistics/blue/chip/list',
        getAccountHoldingDistribution: '/v2/statistics/distribution/',
        getAccountHoldingTrending: '/v2/statistics/holding/trending/',
        getChainOverview: '/v2/statistics/chain/overview',
      },
      refresh: {
        refreshAsset: '/v2/refresh/metadata',
        refreshContract: '/v2/refresh/metadata/contract',
      },
      other: {
        getBlockNumber: '/v2/blocknumber',
        queryAssestAmountByAccounts: '/v2/asset/account/amount',
        getAssetOwnerByContract: '/v2/asset/collection/amount',
        getAssetOwnerByContractAndTokenId: '/v2/asset/owners',
      },
    },
    solana: {
      assets: {
        getAssetsByAccount: '/sol/account/own/',
        getAllAssets: '/sol/account/own/all/',
        getAccountMinted: '/sol/account/mint/',
        getAssetsByCollection: '/sol/assets/collection/',
        getAssetsByTokenAddress: '/sol/assets/',
        queryAssetsInBatches: '/sol/assets/batch',
      },
      transaction: {
        getTransactionsByAccount: '/sol/transactions/account/',
        getTransactionsByCollection: '/sol/transactions/collection/',
        getTransactionsByTokenAddress: '/sol/transactions/',
      },
      collection: {
        getCollection: '/sol/collections/',
        queryCollectionsByFilters: '/sol/collections/filters',
      },
      statistic: {
        getTradeRanking: '/sol/statistics/ranking/trade',
        getCollectionStatistics: '/sol/statistics/collection/',
      },
      refresh: {
        refreshAsset: '/sol/refresh/metadata',
      },
    },
  };
}
