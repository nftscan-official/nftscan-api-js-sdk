export default class NftscanConst {
  /**
   * NFTScan's API base url
   */
  static readonly BASE_URL = {
    eth: 'https://restapi.nftscan.com/api',
    bnb: 'https://bnbapi.nftscan.com/api',
    arbitrum: 'https://arbitrumapi.nftscan.com/api',
    moonbeam: 'https://moonbeamapi.nftscan.com/api',
    polygon: 'https://polygonapi.nftscan.com/api',
    optimism: 'https://optimismapi.nftscan.com/api',
    platon: 'https://platonapi.nftscan.com/api',
    solana: 'https://solanaapi.nftscan.com/api',
    avalanche: 'https://avaxapi.nftscan.com/api',
    cronos: 'https://cronosapi.nftscan.com/api',
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
        getAccountOverview: '/v2/statistics/overview/',
        getBlueChipStatistics: '/v2/statistics/blue/chip/',
        getMarketplaceRanking: '/v2/statistics/ranking/marketplace',
        getMarketCapRanking: '/v2/statistics/ranking/marketcap',
        getCollectionStatistics: '/v2/statistics/collection/',
        getMintRanking: '/v2/statistics/ranking/mint',
        getMintAmount: '/v2/statistics/mint/amount',
        getTradersRanking: '/v2/statistics/ranking/traders',
        getGasRanking: '/v2/statistics/ranking/gas',
        getVolumeIn24h: '/v2/statistics/volume/24h',
      },
      other: {
        getBlockNumber: '/v2/blocknumber',
        queryAssestAmountByAccounts: '/v2/asset/account/amount',
        getAssetOwnerByContract: '/v2/asset/collection/amount',
        getAssetOwnerByContractAndTokenId: '/v2/asset/owners',
        refreshMetadata: '/v2/asset/metadata/refresh',
      },
    },
    solana: {
      assets: {
        getAssetsByAccount: '/sol/account/own/',
        getAllAssets: '/sol/account/own/all/',
        getAccountMinted: '/sol/account/mint/',
        getAssetsByCollection: '/sol/assets/collection/',
        getAssetsByTokenAddress: '/sol/assets/',
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
      },
    },
  };
}
