# NFTScan API SDK (JavaScript / TypeScript)
The NFTScan API SDK is a `JavaScript` / `TypeScript` library which provides convenience and quick access to the [NFTScan's APIs](https://docs.nftscan.com/), it helps developers build new experiences retrieving NFTs and data analysis. We provide a set of endpoints that enable you to fetch ERC721 and ERC1155 NFT assets as well as transactions, collections, marketplace statistics and more.

To use our APIs, You need to register an account on NFTScan open platform [OpenAPI Platform](https://developer.nftscan.com) and get your `API-KEY` for making calls to API services.

The daily request limit for a single account is 10,000 general calls. If you have more needs, please upgrade your API plans to [OpenAPI Pricing](https://developer.nftscan.com/payment/pricing) to enhance the number of calls and obtain access to the PRO interfaces.

The SDK currently supports the following chains:

| Blockchain | Domain name             | Abbreviation |
| ---------- | ----------------------- | ------------ |
| Ethereum   | restapi.nftscan.com     | eth          |
| BNB chain  | bnbapi.nftscan.com      | bnb          |
| Arbitrum   | arbitrumapi.nftscan.com | arbitrum     |
| Moonbeam   | moonbeamapi.nftscan.com | glmr         |
| Polygon    | polygonapi.nftscan.com  | matic        |
| Optimism   | optimismapi.nftscan.com | optimism     |
| PlatON     | platonapi.nftscan.com   | platon       |
| Solana     | solanaapi.nftscan.com   | solana       |

*The value of **Abbreviation** is used in the SDK as an initialization configuration parameter.*

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
  GLMR = 'glmr',
  MATIC = 'matic',
  OPTIMISM = 'optimism',
  PLATON = 'platon',
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
const params = {
  cursor: nextCursor, // A cursor to retrieve the next page
  limit: 20, // Page size
};
const { content, next } = await evm.asset.getAccountMinted("<ACCOUNT_ADDRESS>", params);
// update the nextCursor
nextCursor = next;
```

## API
The SDK currently supports all of the [NFTScan API](https://developer.nftscan.com/) endpoints, The distribution of the API is consistent with the [NFTScan API](https://developer.nftscan.com/). 

As follows:

- #### NFTScan API of EVM
  - ##### Retrieve Assets (`new NftscanEvm().asset.*`)
    - `getAssetsByAccount()`: Retrieve assets owned by an account.
    - `getAllAssets()`: Retrieve all assets owned by an account group by contract address.
    - `getAccountMinted()`: Retrieve assets minted by an account.
    - ***[PRO]*** `getAssetsByContract()`: Retrieve assets by contract address.
    - `getAssetsByContractAndTokenId()`: Retrieve an asset by contract address and token ID.
    - ***[PRO]*** `queryAssetsInBatches`: Retrieve assets by list of contract address and token ID.
    - ***[PRO]*** `queryAssetsByFilters()`: Retrieve assets with filters.
  - ##### Retrieve Transactions (`new NftscanEvm().transaction.*`)
    - ***[PRO]*** `getTransactionsByAccount()`: Retrieve transactions by an account.
    - ***[PRO]*** `getTransactionsByContract()`: Retrieve transactions by contract address.
    - ***[PRO]*** `getTransactionsByContractAndTokenId()`: Retrieve transactions by contract address and token ID.
    - ***[PRO]*** `getTransactionsByToAddress()`: Retrieve transactions by to address.
    - ***[PRO]*** `queryTransactionsByFilters()`: Retrieve transactions with filters.
    - ***[PRO]*** `queryTransactionsByTxHashList()`: Retrieve transactions by the list of transaction hash.
  - ##### Retrieve Collections (`new NftscanEvm().collection.*`)
    - ***[PRO]*** `getCollectionsByContract()`: Retrieve a collection by contract address.
    - ***[PRO]*** `getCollectionsByRanking()`: Retrieve collections by ranking.
    - ***[PRO]*** `queryCollectionsByFilters()`: Retrieve collections with filters.
  - ##### Statistics (`new NftscanEvm().statistic.*`)
    - `getTradeRanking()`: Obtain trade ranking statistics.
    - ***[PRO]*** `getCollectionRanking()`: Obtain collection ranking statistics.
    - ***[PRO]*** `getCollectionTrade()`: Obtain collection trade distribution.
    - ***[PRO]*** `getCollectionTrending()`: Obtain collection trending statistics.
    - ***[PRO]*** `getAccountOverview()`: Obtain account overview statistics.
    - `getMarketplaceRanking()`: Obtain marketplace ranking statistics.
    - `getMarketCapRanking()`: Obtain market cap ranking statistics
    - ***[PRO]*** `getCollectionStatistics()`: Obtain collection statistics.
    - `getMintRanking()`: Obtain mint ranking statistics.
    - `getMintAmount()`: Obtain mint amount statistics.
    - `getTradersRanking()`: Obtain traders ranking statistics.
    - `getGasRanking()`: Obtain traders ranking statistics.
    - `getVolumeIn24h()`: Obtain 24h volume statistics.
   - ##### Other (`new NftscanEvm().other.*`)
     - `getBlockNumber()`: Obtain the latest block number.
     - ***[PRO]*** `queryAssestAmountByAccounts()`: Obtain asset amount owned by accounts.
     - ***[PRO]*** `getAssetOwnerByContract()`: Obtain asset owner amount by contract address.
     - ***[PRO]*** `getAssetOwnerByContractAndTokenId()`: Obtain asset owner's amount by contract address and token ID.
     - ***[PRO]*** `refreshMetadata()`: Submit a task for refreshing NFT metadata.
  
- #### NFTScan API of Solana
  - ##### Retrieve Assets (`new NftscanSolana().asset.*`)
    - `getAssetsByAccount()`: Retrieve assets owned by an account.
    - `getAllAssets()`: Retrieve all assets owned by an account group by collection.
    - `getAccountMinted()`: Retrieve assets minted by an account.
    - ***[PRO]*** `getAssetsByCollection()`: Retrieve assets by collection.
    - `getAssetsByTokenAddress()`: Retrieve an asset by token address.
  - ##### Retrieve Transactions (`new NftscanSolana().transaction.*`)
    - `getTransactionsByAccount()`: Retrieve transactions by an account.
    - `getTransactionsByCollection()`: Retrieve transactions by collection.
    - `getTransactionsByTokenAddress()`: Retrieve transactions by token address.
  - ##### Retrieve Collections (`new NftscanSolana().collection.*`)
    - ***[PRO]*** `getCollection()`: Retrieve a collection.
    - ***[PRO]*** `queryCollectionsByFilters()`: Retrieve collections with filters.
  - ##### Statistics (`new NftscanSolana().statistic.*`)
    - `getTradeRanking()`: Obtain trade ranking statistics.

## More
- [NFTScan API](https://developer.nftscan.com/)
- [NFTScan API Docs](https://docs.nftscan.com/)
- [NFTScan NFT Explorer](https://www.nftscan.com/)