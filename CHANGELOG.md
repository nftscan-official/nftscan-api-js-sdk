# Changelog
## [1.11.0](https://github.com/nftscan-official/nftscan-api-js-sdk/compare/v1.10.0...v1.11.0) (2023-12-04)


### ✨ Features | 新功能

* added support the EVM-like chain `Viction` & `Starknet` ([fd2f15d](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/fd2f15d9d899e2abe2cf5fb6279b1303bb41af04))
* add interface `getAccountHoldingTrending` ([0d70b59](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/0d70b591a6207b9742a04baab0a313f933806a87))
* Added `collection_token_address` attribute to Collection-related interface return parameters of Solana chain ([8e1ebc6](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/8e1ebc6c5876736ed83a25ec30f60942dcf60cd7))
* Added `opensea_slug` attribute to Collection-related interface return parameters of Evm chain ([d43b103](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/d43b1035425b573607490d201353dc589e01d3db))

## [1.10.0](https://github.com/nftscan-official/nftscan-api-js-sdk/compare/v1.9.0...v1.10.0) (2023-09-20)


### ✨ Features | 新功能

* Added `is_spam` attribute to Collection-related interface return parameters ([e378db9](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/e378db9da98a33c6826226a44bd8684e033ed016))
* added support the EVM-like chain `Base` ([b8a2ae8](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/b8a2ae8334153f4f3b1da623a38000309d989013))
* Update the return parameters of interface `getCollectionStatistics` ([ffe82b0](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/ffe82b0ed119694d7a19cbb5fac460769fb6ea36))

## [1.9.0](https://github.com/nftscan-official/nftscan-api-js-sdk/compare/v1.8.1...v1.9.0) (2023-08-08)


### 🐛 Bug Fixes | Bug 修复

* Modify the return data type of `getMultiChainAssets` interface to array ([d86aa9b](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/d86aa9b553c7345bbfe4f7fc3d9541920b036181))


### ✨ Features | 新功能

* add input params `sort_direction`, `sort_field` to `queryAssetsByAttributes` interface ([eec8456](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/eec845629536f5bb8ef306e58be35acc32290981))
* add interface `getCollectionTopHolder` ([a4e66fc](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/a4e66fc9a5bc72eec5b587a6cb9078f0b75fc6df))
* The response data of the interface `getAccountOverview` adds a new attribute `collection_count` ([6ccbc92](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/6ccbc920602794a2562e88246df8b170d61a970d))
* added support the EVM-like chain `zkSync Era` & `Linea` ([0a3d1df](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/0a3d1df8b5558e12ab8738392260ef59db209232))

### [1.8.1](https://github.com/nftscan-official/nftscan-api-js-sdk/compare/v1.8.0...v1.8.1) (2023-06-27)


### ✨ Features | 新功能

- added endpoint:
  - `getWalletRanking`,
  - `getTradeWalletRanking`,
  - `getCollectionHoldingAmountDistribution`,
  - `getCollectionHoldingPeriodDistribution`,
  - `getCollectionBlueChipList`,
  - `getAccountHoldingDistribution`
- Update the input and output parameters of EVM-related interfaces
- Remove the PRO tag and start using Compute Unit Pricing for all interfaces ([340db9c](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/340db9caf281cd919e721055d49f92da9d5e2c28))

## [1.8.0](https://github.com/nftscan-official/nftscan-api-js-sdk/compare/v2.0.0...v1.8.0) (2023-03-06)


### ✨ Features | 新功能

* added support the EVM-like chain `Gnosis` ([a811260](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/a811260ac436e9f59cc282e34d0c7e1a95aaca33))
* change the text in comments, update the input and output param, add API `queryAssetsInBatches`, `getCollectionStatistics` of Solana ([23da908](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/23da9088614cf2b0ce28d13890e1885c78ffcfe2))

## [1.7.0](https://github.com/nftscan-official/nftscan-api-js-sdk/compare/v2.0.0...v1.7.0) (2023-02-08)


### ✨ Features | 新功能

* feat: delete API `getVolumeIn24h` `refreshMetadata` of EVM, add API `getCollectionOverview` `getCollectionOverview` `refreshAsset` `refreshContract` of EVM, add API `refreshAsset` of Solana.([56d28cb](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/56d28cb11565971868e96650f84a825c958861e6))
* feat: added support the EVM-like chain Fantom.([57b0f5d](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/57b0f5dacc5202708cafa00cd86840f5129b9932))

### [1.6.1](https://github.com/nftscan-official/nftscan-api-js-sdk/compare/v1.6.0...v1.6.1) (2022-12-27)


### ✨ Features | 新功能

* Added `average_price_change_1d`, `average_price_change_7d`, `average_price_change_30d` to the return data of endpoint `getCollectionStatistics` ([b5e2c70](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/b5e2c7053a5a2b8253fe3c9332d0bf207a14480a))

## [1.6.0](https://github.com/nftscan-official/nftscan-api-js-sdk/compare/v1.5.0...v1.6.0) (2022-12-09)


### ✨ Features | 新功能

* Added `handling_fee` to the return data of endpoint `getMarketplaceRanking` ([37c64ae](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/37c64ae6a6af9a4f8283da3f1f4fd6f9740cb5e2))
* Added `market_cap` to the return data of endpoint `getCollectionStatistics` ([e2da01a](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/e2da01ac180e425d113dd8b76d02593be6fe950a))
* Added `sort_direction` query condition to `getTransactionsByAccount`, `getTransactionsByContract`,`getTransactionsByContractAndTokenId`,`getTransactionsByToAddress` endpoint of EVM ([7676d68](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/7676d682ccf2e4aae2e9e99eac9e041cc9fd6846))
* Added endpoint `queryCollectionsByAccountAddress`, which Retrieve collections by account address. ([8083108](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/80831085bd1f1dfc611a8ea1f659a8a5e06eb740))
* added support the EVM-like chain Cronos ([158f6ab](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/158f6ab0ced2867b15bf21e0fa5cc66686b82288))

## [1.5.0](https://github.com/nftscan-official/nftscan-api-js-sdk/compare/v1.4.0...v1.5.0) (2022-11-23)


### ✨ Features | 新功能

* Added `opensea_verified` to the return data of EVM collection related ([3adf243](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/3adf24350facbd0d5af840f0262fae1386a5624f))
* Added `own_timestamp` to the return data of EVM asset related ([e0bfbf7](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/e0bfbf75e935bacd2b445a4516d1a22214fd6bab))
* Added `sort_field` & `sort_direction` query condition to `getAssetsByAccount` endpoint of EVM. ([d9ae4ee](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/d9ae4eec86a5e32cd0ba8dd6e12890f9767b9f80))
* Added `twitter` query condition to `queryCollectionsByFilters` endpoint of EVM ([b5e5462](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/b5e5462ab9a5ec3b515b102df85be99c4bc4dac3))
* Adjusted the paging limit of `getTransactionsByAccount` endpoint of EVM to 1000 ([7b3953a](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/7b3953ab165f33ac2b04661279cc29ae282a9790))

## [1.4.0](https://github.com/nftscan-official/nftscan-api-js-sdk/compare/v1.3.0...v1.4.0) (2022-11-18)


### ✨ Features | 新功能

*  Added `1y` & `all` to the time query condition of `getCollectionTrending` endpoint of EVM ([67933b1](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/67933b1da394074280e5761770e2a6c1b9d6d405))
* Added `amounts_total` to `getTradeRanking` endpoint return data of EVM. ([21303fb](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/21303fb8c9be04739e3b68e24ad0933d239f9964))
* Added `show_collection`,`name_fuzzy_search`,`sort_direction`,`sort_field` query condition to `queryCollectionsByFilters` endpoint of EVM ([0028eaf](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/0028eaf793cf8e4a4c8f2b59d0efd660af37660e))
* Added endpoint `getMultiChainAssets` of EVM, which Retrieve multi-chain assets owned by an account. Added endpoint `queryAssetsByAttributes` of EVM, which Retrieve assets by contract address with attributes. ([e50c5b6](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/e50c5b6d2021b3065b5e155dcb6785606f4852ba))
* Modify the short name of the blockchain ([c2df23a](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/c2df23ae0d9fa18a30d74c1244c6d79e602286d4))

## [1.3.0](https://github.com/nftscan-official/nftscan-api-js-sdk/compare/v1.2.0...v1.3.0) (2022-11-03)


### ✨ Features | 新功能

* Added endpoint `getBlueChipStatistics`, which returns blue chip statistics referring to [NFTScan Overview](https://www.nftscan.com/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?module=Analytics) ([e4f00d9](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/e4f00d9853419b7641dad7cdce14ce7cbe7316c3))
* Added property `amounts_total` to entity `Collection` ([7545587](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/75455870b0566c06861d7547e450e983ac87f9b5))
* Added `event_type` query condition to all retrieve transactions endpoints ([6bad49f](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/6bad49fbc1e3c9758dbb4c059e23571803e1e730))
* Added attributes `average_price_change_1d, average_price_change_7d, average_price_change_30d` to the response data of the interface `getCollectionRanking` ([7cdff08](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/7cdff0857bc78e1f50fdd23f4eee888bacbaf350))
* Added optional value to the input parameter sort_field of the interface `getCollectionRanking` ([a16568d](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/a16568d4ac54f3d2f71ee23a4b120b1e6ddb8b14))

## [1.2.0](https://github.com/nftscan-official/nftscan-api-js-sdk/compare/v1.1.0...v1.2.0) (2022-10-24)


### ✨ Features | 新功能

* Added erc_type query condition to `getAccountMinted` endpoint ([8a109cf](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/8a109cf72bf55263674fa9343d1bd9a6e3cd8733))
* Cancel the required parameter erc_type of the `getAllAssets` endpoint ([0877bb7](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/0877bb7dbed6b3a41edf3a396a052bb99690042d))

## [1.1.0](https://github.com/nftscan-official/nftscan-api-js-sdk/compare/v1.0.1...v1.1.0) (2022-10-13)


### ✨ Features | 新功能

* Added support for Avalanche blockchain ([3ed6025](https://github.com/nftscan-official/nftscan-api-js-sdk/commit/3ed6025a662fbfb5c60e49676afc5810cf36f1f0))


### [1.0.1](https://github.com/nftscan2022/nftscan-api-js-sdk/compare/v1.0.0...v1.0.1) (2022-09-28)


### ✨ Features | 新功能

* Change the deploy config ([b416319](https://github.com/nftscan2022/nftscan-api-js-sdk/commit/b416319e11d304b11f5f7041660e97e94345b465))

## 1.0.0 (2022-09-27)


### ✨ Features | 新功能

* Added evm and solana api ([7ed4ef7](https://github.com/nftscan2022/nftscan-api-js-sdk/commit/7ed4ef797f61cd256aa32cb1987275545a369d74))
