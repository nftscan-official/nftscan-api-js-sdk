# Changelog
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
