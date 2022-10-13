---
home: true
heroText: NFTScan API SDK
tagline: Quick access to Web3 via NFTScan

# 配置首页按钮
actions:
  # - text: Guide
  #   link: /guide/
  #   type: primary
  - text: Github
    link: git@github.com:nftscan2022/nftscan-api-js-sdk.git
    type: secondary

# 首页的页脚
footer: MIT Licensed | Copyright ©nftscan2022
---

NFTScan API provides convenience and quick access to full NFT data with developers

QUICK START
<CodeGroup>
  <CodeGroupItem title="YARN" active>

```shell
yarn add nftscan-api
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```shell
npm install nftscan-api
```

  </CodeGroupItem>
</CodeGroup>

```ts
import { ErcType, EvmChain, NftscanEvm } from "nftscan-api";

const config = {
  apiKey: "<YOUR_API_KEY>", // Replace with your NFTScan API key.
  chain: EvmChain.ETH, // Replace with your chain.
};

const evm = new NftscanEvm(config);
```
