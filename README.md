# NFTScan API SDK (JavaScript / TypeScript)
The NFTScan API SDK is a `JavaScript` / `TypeScript` library which provides convenience and quick access to the [NFTScan's APIs](https://docs.nftscan.com/), it helps developers build new experiences retrieving NFTs and data analysis. We provide a set of endpoints that enable you to fetch ERC721 and ERC1155 NFT assets as well as transactions, collections, marketplace statistics and more.

To use our APIs, You need to register an account on NFTScan open platform [OpenAPI Platform](https://developer.nftscan.com) and get your `API-KEY` for making calls to API services.

The daily request limit for a single account is 10,000 general calls. If you have more needs, please upgrade your API plans to [OpenAPI Pricing](https://developer.nftscan.com/payment/pricing) to enhance the number of calls and obtain access to the PRO interfaces.

The SDK currently supports the following chains:

| Blockchain | Domain name             | Short name   |
| ---------- | ----------------------- | ------------ |
| Ethereum   | restapi.nftscan.com     | eth          |
| BNB chain  | bnbapi.nftscan.com      | bnb          |
| Polygon    | polygonapi.nftscan.com  | polygon      |
| Moonbeam   | moonbeamapi.nftscan.com | moonbeam     |
| Arbitrum   | arbitrumapi.nftscan.com | arbitrum     |
| Optimism   | optimismapi.nftscan.com | optimism     |
| PlatON     | platonapi.nftscan.com   | platon       |
| Avalanche  | avaxapi.nftscan.com     | avalanche    |
| Solana     | solanaapi.nftscan.com   | solana       |
| Cronos     | cronosapi.nftscan.com   | cronos       |

*The value of **Short name** is used in the SDK as an initialization configuration parameter.*

## Getting started

via `npm`:

```shell
npm install nftscan-api
```

or `yarn`:

```shell
yarn add nftscan-api
```

Then you can import and use the SDK:

```ts
import { ErcType, EvmChain, NftscanEvm } from "nftscan-api";

const config = {
  apiKey: "<YOUR_API_KEY>", // Replace with your NFTScan API key.
  chain: EvmChain.ETH, // Replace with your chain.
};

const evm = new NftscanEvm(config);
```
The `new NftscanEvm()` returns an object that can query the EVM-like chain, for here it is `EvmChain.ETH`, which stand for the Ethereum blockchain. 

The complete enumeration value of `EvmChain` includes the following:
```ts
export enum EvmChain {
  ETH = 'eth',
  BNB = 'bnb',
  ARBITRUM = 'arbitrum',
  MOONBEAM = 'moonbeam',
  POLYGON = 'polygon',
  OPTIMISM = 'optimism',
  PLATON = 'platon',
  AVALANCHE = 'avalanche',
  CRONOS = 'cronos',
}
```

And then you can use the object `evm` to access to the NFTScan API, form example `getAssetsByAccount`, which can retrieve the assets owned by an account.

```ts
const accountAddress = "<ACCOUNT_ADDRESS>"; // Replace with the account address you want to query.
// Access asset-related APIs
evm.asset
  // Retrieve assets owned by an account.
  .getAssetsByAccount(accountAddress, {
    erc_type: ErcType.ERC_721, // Can be erc721 or erc1155
  })
  .then((res) => console.log(res));

// Access transaction-related APIs 
evm.transaction
  // Retrieve transactions by an account
  .getTransactionsByAccount(accountAddress)
  .then((res) => console.log(res));
```
Not only `asset` and `transaction`, but the `NftscanEvm` also provides several other objects, for example `collection` \ `statistic` \ `other`, these objects provide different types of APIs.

To query the other EVM-like chain's asset, for example 'Arbitrum', changing the config param `chain` to `EvmChain.ARBITRUM`:
```ts
const evm = new NftscanEvm({
  apiKey: "<YOUR_API_KEY>",
  chain: EvmChain.ARBITRUM, 
});
```

We also support the Solana blockchain, to access the API, you just need to use `new NftscanSolana()` to get an object.

```ts
const sol = new NftscanSolana({ apiKey: "<YOUR_API_KEY>" });
sol.asset
  .getAssetsByAccount("<ACCOUNT_ADDRESS>")
  .then((res) => console.log(res));
```

### Pagination
In general, NFTScan's API that supports pagination will uses the query params `cursor` as the paging parameter, The return data of the API call will contain the attribute `next`, you can pass in the `next` value to the next call.

For example:
```ts
let nextCursor = "";
const { content, next } = await evm.asset.getAccountMinted("<ACCOUNT_ADDRESS>", {
  cursor: nextCursor, // A cursor to retrieve the next page
  limit: 20, // Page size
});
// update the nextCursor
nextCursor = next;
```

## API
The SDK currently supports all of the [NFTScan API](https://developer.nftscan.com/) endpoints, The distribution of the API is consistent with the [NFTScan API](https://developer.nftscan.com/). 

As follows:

- #### NFTScan API of EVM
  - ##### Retrieve Assets (`new NftscanEvm().asset.*`)
    - `getAssetsByAccount()`: [Retrieve assets for account](https://docs.nftscan.com/nftscan/getAccountNftAssetsUsingGET)
    - `getAllAssets()`: [Retrieve all assets for account](https://docs.nftscan.com/nftscan/getAccountNftAssetsGroupByContractAddressUsingGET)
    - `getAccountMinted()`: [Retrieve assets minted for account](https://docs.nftscan.com/nftscan/getAccountMintedUsingGET)
    - ***[PRO]*** `getAssetsByContract()`: [Retrieve assets for contract](https://docs.nftscan.com/nftscan/getAssetsByContractAddressUsingGET)
    - `getAssetsByContractAndTokenId()`: [Retrieve an asset](https://docs.nftscan.com/nftscan/getAssetByContractAddressAndTokenIdUsingGET)
    - ***[PRO]*** `queryAssetsInBatches`: [Retrieve multiple assets](https://docs.nftscan.com/nftscan/getAssetsByListUsingPOST_1)
    - ***[PRO]*** `queryAssetsByFilters()`: [Retrieve assets with filters](https://docs.nftscan.com/nftscan/getAssetsByListUsingPOST).
    - ***[PRO]*** `queryAssetsByAttributes()`: [Retrieve assets with attributes](https://docs.nftscan.com/nftscan/getAssetsByContractAddressWithAttributesUsingPOST)
    - ***[PRO]*** `getMultiChainAssets()`: [Retrieve multi-chain assets for account](https://docs.nftscan.com/nftscan/getAssetsByMultiChainUsingGET)
  - ##### Retrieve Transactions (`new NftscanEvm().transaction.*`)
    - ***[PRO]*** `getTransactionsByAccount()`: [Retrieve transactions for account](https://docs.nftscan.com/nftscan/getAccountTransactionsUsingGET_1)
    - ***[PRO]*** `getTransactionsByContract()`: [Retrieve transactions for contract](https://docs.nftscan.com/nftscan/getTransactionsByContractAddressUsingGET)
    - ***[PRO]*** `getTransactionsByContractAndTokenId()`: [Retrieve transactions for an asset](https://docs.nftscan.com/nftscan/getTransactionByContractAddressAndTokenIdUsingGET)
    - ***[PRO]*** `queryTransactionsByFilters()`: [Retrieve transactions with filters](https://docs.nftscan.com/nftscan/getAssetsByListUsingPOST_2)
    - ***[PRO]*** `getTransactionsByToAddress()`: [Retrieve transactions by to address](https://docs.nftscan.com/nftscan/getTransactionByTxToUsingGET)
    - ***[PRO]*** `queryTransactionsByTxHashList()`: [Retrieve transactions by hash](https://docs.nftscan.com/nftscan/getTransactionRecordsByTxHashListUsingPOST)
  - ##### Retrieve Collections (`new NftscanEvm().collection.*`)
    - ***[PRO]*** `getCollectionsByContract()`: [Retrieve a collection](https://docs.nftscan.com/nftscan/getCollectionUsingGET)
    - ***[PRO]*** `queryCollectionsByFilters()`: [Retrieve collections with filters](https://docs.nftscan.com/nftscan/getCollectionsUsingPOST)
    - ***[PRO]*** `queryCollectionsByAccountAddress()`: [Retrieve collections for account](https://docs.nftscan.com/nftscan/getCollectionsOwnByAccountAddressUsingGET)
    - ***[PRO]*** `getCollectionsByRanking()`: [Retrieve collections by ranking](https://docs.nftscan.com/nftscan/getRankingsUsingGET)
  - ##### Statistics (`new NftscanEvm().statistic.*`)
    - `getTradeRanking()`: [Trade ranking](https://docs.nftscan.com/nftscan/getTradeUsingGET_1)
    - `getMintRanking()`: [mint ranking](https://docs.nftscan.com/nftscan/getMintUsingGET)
    - `getMintAmount()`: [Mint amount](https://docs.nftscan.com/nftscan/getAmountUsingGET)
    - `getTradersRanking()`: [Traders ranking](https://docs.nftscan.com/nftscan/getTradersUsingGET)
    - `getGasRanking()`: [Gas ranking](https://docs.nftscan.com/nftscan/getGasUsingGET)
    - ***[PRO]*** `getCollectionRanking()`: [Collection ranking](https://docs.nftscan.com/nftscan/collectionRankingUsingGET)
    - `getMarketplaceRanking()`: [Marketplace ranking](https://docs.nftscan.com/nftscan/getMarketplaceUsingGET)
    - `getMarketCapRanking()`: [Market cap ranking](https://docs.nftscan.com/nftscan/getMarketCapUsingGET)
    - ***[PRO]*** `getCollectionStatistics()`: [Collection statistics](https://docs.nftscan.com/nftscan/getCollectionUsingGET_2)
    - ***[PRO]*** `getCollectionTrade()`: [Collection trade distribution](https://docs.nftscan.com/nftscan/tradeDistributionUsingGET)
    - ***[PRO]*** `getCollectionTrending()`: [Collection trending statistics](https://docs.nftscan.com/nftscan/trendingUsingGET)
    - ***[PRO]*** `getBlueChipStatistics()`: [Blue chip](https://docs.nftscan.com/nftscan/blueChipUsingGET)
    - ***[PRO]*** `getAccountOverview()`: [Account overview](https://docs.nftscan.com/nftscan/accountOverviewUsingGET)
    - `getCollectionOverview()`: [Collection overview](https://docs.nftscan.com/nftscan/getPlatformOverviewUsingGET)
  - ##### Refresh (`new NftscanEvm().refresh.*`)
     - ***[PRO]*** `refreshAsset()`: [Refresh an asset](https://docs.nftscan.com/nftscan/refreshAssetMetadataUsingPOST)
     - ***[PRO]*** `refreshContract()`:[Refresh a contract](https://docs.nftscan.com/nftscan/refreshAssetMetadataByContractAddressUsingPOST)
   - ##### Other (`new NftscanEvm().other.*`)
     - `getBlockNumber()`: [Latest block number](https://docs.nftscan.com/nftscan/getBlockNumberUsingGET)
     - ***[PRO]*** `queryAssestAmountByAccounts()`: [Asset amount for accounts](https://docs.nftscan.com/nftscan/getAssetAmountByAccountsUsingPOST)
     - ***[PRO]*** `getAssetOwnerByContract()`: [Asset owners for contract](https://docs.nftscan.com/nftscan/getAssetOwnerAmountByContractUsingGET)
     - ***[PRO]*** `getAssetOwnerByContractAndTokenId()`: [Asset owner amount for an asset](https://docs.nftscan.com/nftscan/getAssetOwnersUsingGET)
- #### NFTScan API of Solana
  - ##### Retrieve Assets (`new NftscanSolana().asset.*`)
    - `getAssetsByAccount()`: [Retrieve assets for account](https://docs.nftscan.com/solana/getAccountNftAssetsUsingGET_1)
    - `getAllAssets()`: [Retrieve all assets for account](https://docs.nftscan.com/solana/getAccountNftAssetsGroupByCollectionUsingGET)
    - `getAccountMinted()`: [Retrieve assets minted for account](https://docs.nftscan.com/solana/getAccountMintedUsingGET_1)
    - ***[PRO]*** `getAssetsByCollection()`: [Retrieve assets by collection](https://docs.nftscan.com/solana/getAssetsByCollectionUsingGET)
    - `getAssetsByTokenAddress()`: [Retrieve an asset](https://docs.nftscan.com/solana/getAssetByTokenAddressUsingGET)
  - ##### Retrieve Transactions (`new NftscanSolana().transaction.*`)
    - `getTransactionsByAccount()`: [Retrieve transactions for account](https://docs.nftscan.com/solana/getAccountTransactionsUsingGET)
    - `getTransactionsByCollection()`: [Retrieve transactions by collection](https://docs.nftscan.com/solana/getTransactionsByCollectionUsingGET)
    - `getTransactionsByTokenAddress()`: [Retrieve transactions for an asset](https://docs.nftscan.com/solana/getTransactionByTokenAddressUsingGET)
  - ##### Retrieve Collections (`new NftscanSolana().collection.*`)
    - ***[PRO]*** `getCollection()`: [Retrieve a collection](https://docs.nftscan.com/solana/getCollectionUsingGET_1)
    - ***[PRO]*** `queryCollectionsByFilters()`: [Retrieve collections with filters](https://docs.nftscan.com/solana/getCollectionsUsingPOST_1)
  - ##### Statistics (`new NftscanSolana().statistic.*`)
    - `getTradeRanking()`: [Trade ranking](https://docs.nftscan.com/solana/getTradeUsingGET)
  - ##### Refresh (`new NftscanSolana().refresh.*`)
     - ***[PRO]*** `refreshAsset()`: [Refresh an asset](https://docs.nftscan.com/solana/refreshAssetMetadataByTokenAddressUsingPOST)

## More
- [NFTScan API](https://developer.nftscan.com/)
- [NFTScan API Docs](https://docs.nftscan.com/)
- [NFTScan NFT Explorer](https://www.nftscan.com/)