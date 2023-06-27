# NFTScan API SDK (JavaScript / TypeScript)
The NFTScan API SDK is a `JavaScript` / `TypeScript` library which provides convenience and quick access to the [NFTScan's APIs](https://docs.nftscan.com/), it helps developers build new experiences retrieving NFTs and data analysis. We provide a set of endpoints that enable you to fetch ERC721 and ERC1155 NFT assets as well as transactions, collections, marketplace statistics and more.

To use our APIs, You need to register an account on NFTScan open platform [OpenAPI Platform](https://developer.nftscan.com) and get your `API-KEY` for making calls to API services.

The SDK currently supports the following chains:

| Blockchain | Domain name             | Short name |
| ---------- | ----------------------- | ---------- |
| Ethereum   | restapi.nftscan.com     | eth        |
| BNB chain  | bnbapi.nftscan.com      | bnb        |
| Polygon    | polygonapi.nftscan.com  | polygon    |
| Moonbeam   | moonbeamapi.nftscan.com | moonbeam   |
| Arbitrum   | arbitrumapi.nftscan.com | arbitrum   |
| Optimism   | optimismapi.nftscan.com | optimism   |
| PlatON     | platonapi.nftscan.com   | platon     |
| Avalanche  | avaxapi.nftscan.com     | avalanche  |
| Cronos     | cronosapi.nftscan.com   | cronos     |
| Fantom     | fantomapi.nftscan.com   | fantom     |
| Gnosis     | gnosisapi.nftscan.com   | gnosis     |
| Solana     | solanaapi.nftscan.com   | solana     |

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
  FANTOM = 'fantom',
  Gnosis = 'gnosis',
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
    - `getAssetsByAccount()`: [Get NFTs by account](https://docs.nftscan.com/reference/evm/get-nfts-by-account)
    - `getAllAssets()`: [Get all NFTs by account](https://docs.nftscan.com/reference/evm/get-all-nfts-by-account)
    - `getAccountMinted()`: [Get minted NFTs by account](https://docs.nftscan.com/reference/evm/get-minted-nfts-by-account)
    - `getAssetsByContract()`: [Get NFTs by contract](https://docs.nftscan.com/reference/evm/get-nfts-by-contract)
    - `getAssetsByContractAndTokenId()`: [Get single NFT](https://docs.nftscan.com/reference/evm/get-single-nft)
    - `queryAssetsInBatches`: [Get multiple NFTs](https://docs.nftscan.com/reference/evm/get-multiple-nfts)
    - `queryAssetsByFilters()`: [Search NFTs](https://docs.nftscan.com/reference/evm/search-nfts).
    - `queryAssetsByAttributes()`: [Get NFTs by attributes](https://docs.nftscan.com/reference/evm/get-nfts-by-attributes)
    - `getMultiChainAssets()`: [Get all multi-chain NFTs by account](https://docs.nftscan.com/reference/evm/get-all-multi-chain-nfts-by-account)
  - ##### Retrieve Transactions (`new NftscanEvm().transaction.*`)
    - `getTransactionsByAccount()`: [Get transactions by account](https://docs.nftscan.com/reference/evm/get-transactions-by-account)
    - `getTransactionsByContract()`: [Get transactions by contract](https://docs.nftscan.com/reference/evm/get-transactions-by-contract)
    - `getTransactionsByContractAndTokenId()`: [Get transactions by NFT](https://docs.nftscan.com/reference/evm/get-transactions-by-nft)
    - `queryTransactionsByFilters()`: [Search transactions](https://docs.nftscan.com/reference/evm/search-transactions)
    - `getTransactionsByToAddress()`: [Get transactions by to address](https://docs.nftscan.com/reference/evm/get-transactions-by-to-address)
    - `queryTransactionsByTxHashList()`: [Get transactions by hash](https://docs.nftscan.com/reference/evm/get-transactions-by-hash)
  - ##### Retrieve Collections (`new NftscanEvm().collection.*`)
    - `getCollectionsByContract()`: [Get an NFT collection](https://docs.nftscan.com/reference/evm/get-an-nft-collection)
    - `queryCollectionsByFilters()`: [Search NFT collections](https://docs.nftscan.com/reference/evm/search-nft-collections)
    - `queryCollectionsByAccountAddress()`: [Get NFT collections by account](https://docs.nftscan.com/reference/evm/get-nft-collections-by-account)
    - `getCollectionsByRanking()`: [Get NFT collections by ranking](https://docs.nftscan.com/reference/evm/get-nft-collections-by-ranking)
  - ##### Statistics (`new NftscanEvm().statistic.*`)
    - `getTradeRanking()`: [Trade ranking](https://docs.nftscan.com/reference/evm/trade-ranking)
    - `getMintRanking()`: [mint ranking](https://docs.nftscan.com/reference/evm/mint-ranking)
    - `getMintAmount()`: [Mint amount](https://docs.nftscan.com/reference/evm/mint-amount)
    - `getTradersRanking()`: [Traders ranking](https://docs.nftscan.com/reference/evm/traders-ranking)
    - `getGasRanking()`: [Gas ranking](https://docs.nftscan.com/reference/evm/gas-ranking)
    - `getCollectionRanking()`: [Collection ranking](https://docs.nftscan.com/reference/evm/collection-ranking)
    - `getMarketplaceRanking()`: [Marketplace ranking](https://docs.nftscan.com/reference/evm/marketplace-ranking)
    - `getMarketCapRanking()`: [Market cap ranking](https://docs.nftscan.com/reference/evm/market-cap-ranking)
    - `getCollectionStatistics()`: [Collection statistics](https://docs.nftscan.com/reference/evm/collection-statistics)
    - `getCollectionTrade()`: [Collection trade distribution](https://docs.nftscan.com/reference/evm/collection-trade-distribution)
    - `getCollectionTrending()`: [Collection trending statistics](https://docs.nftscan.com/reference/evm/collection-trending-statistics)
    - `getBlueChipStatistics()`: [Blue chip](https://docs.nftscan.com/reference/evm/blue-chip)
    - `getAccountOverview()`: [Account overview](https://docs.nftscan.com/reference/evm/account-overview)
    - `getCollectionOverview()`: [Collection overview](https://docs.nftscan.com/reference/evm/collection-overview)
    - `getWalletRanking()`: [Wallet Ranking](https://docs.nftscan.com/reference/evm/wallet-ranking)
    - `getTradeWalletRanking()`: [Wallet Trade Ranking](https://docs.nftscan.com/reference/evm/wallet-trade-ranking)
    - `getCollectionHoldingAmountDistribution()`: [Collection Holding Amount Distribution](https://docs.nftscan.com/reference/evm/collection-holding-amount-distribution)
    - `getCollectionHoldingPeriodDistribution()`: [Collection Holding Period Distribution](https://docs.nftscan.com/reference/evm/collection-holding-period-distribution)
    - `getCollectionBlueChipList()`: [Collection Blue Chip List](https://docs.nftscan.com/reference/evm/collection-blue-chip-list)
    - `getAccountHoldingDistribution()`: [Account Holding Distribution](https://docs.nftscan.com/reference/evm/account-holding-distribution)
  - ##### Refresh (`new NftscanEvm().refresh.*`)
     - `refreshAsset()`: [Refresh an asset](https://docs.nftscan.com/reference/evm/refresh-nft-metadata)
     - `refreshContract()`:[Refresh a contract](https://docs.nftscan.com/reference/evm/refresh-nft-metadata-by-contract)
   - ##### Other (`new NftscanEvm().other.*`)
     - `getBlockNumber()`: [Get latest block number](https://docs.nftscan.com/reference/evm/get-latest-block-number)
     - `queryAssestAmountByAccounts()`: [Get NFT amount by account](https://docs.nftscan.com/reference/evm/get-nft-amount-by-account)
     - `getAssetOwnerByContract()`: [Get NFT owners by contract](https://docs.nftscan.com/reference/evm/get-nft-owners-by-contract)
     - `getAssetOwnerByContractAndTokenId()`: [Asset owner amount for an asset](https://docs.nftscan.com/reference/evm/get-owners-by-an-nft)
- #### NFTScan API of Solana
  - ##### Retrieve Assets (`new NftscanSolana().asset.*`)
    - `getAssetsByAccount()`: [Get NFTs by account](https://docs.nftscan.com/reference/solana/get-nfts-by-account)
    - `getAllAssets()`: [Get all NFTs by account](https://docs.nftscan.com/reference/solana/get-all-nfts-by-account)
    - `getAccountMinted()`: [Get minted NFTs by account](https://docs.nftscan.com/reference/solana/get-minted-nfts-by-account)
    - `getAssetsByCollection()`: [Get NFTs by collection](https://docs.nftscan.com/reference/solana/get-nfts-by-collection)
    - `getAssetsByTokenAddress()`: [Get single NFT](https://docs.nftscan.com/reference/solana/get-single-nft)
    - `queryAssetsInBatches`: [Get multiple NFTs](https://docs.nftscan.com/reference/solana/get-multiple-nfts)
  - ##### Retrieve Transactions (`new NftscanSolana().transaction.*`)
    - `getTransactionsByAccount()`: [Get transactions by account](https://docs.nftscan.com/reference/solana/get-transactions-by-account)
    - `getTransactionsByCollection()`: [Get transactions by collection](https://docs.nftscan.com/reference/solana/get-transactions-by-collection)
    - `getTransactionsByTokenAddress()`: [Get transactions by NFT](https://docs.nftscan.com/reference/solana/get-transactions-by-nft)
  - ##### Retrieve Collections (`new NftscanSolana().collection.*`)
    - `getCollection()`: [Get an NFT collection](https://docs.nftscan.com/reference/solana/get-an-nft-collection)
    - `queryCollectionsByFilters()`: [Search NFT collections](https://docs.nftscan.com/reference/solana/search-nft-collections)
  - ##### Statistics (`new NftscanSolana().statistic.*`)
    - `getTradeRanking()`: [Trade ranking](https://docs.nftscan.com/reference/solana/trade-ranking)
    - `getCollectionStatistics()`: [Collection Statistics](https://docs.nftscan.com/reference/solana/collection-statistics)
  - ##### Refresh (`new NftscanSolana().refresh.*`)
     - `refreshAsset()`: [Refresh an asset](https://docs.nftscan.com/reference/solana/refresh-nft-metadata)

## More
- [NFTScan API](https://developer.nftscan.com/)
- [NFTScan API Docs](https://docs.nftscan.com/)
- [NFTScan NFT Explorer](https://www.nftscan.com/)