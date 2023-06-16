/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

function isNodeEnvironment() {
  return typeof process !== 'undefined' && process != null && process.versions != null && process.versions.node != null;
}

const NftscanSDK = isNodeEnvironment() ? require('../dist/umd/index.js') : window.NftscanSDK;

const on = (ws, topic, chain, params) => {
  return ws.on({
    topic,
    chain,
    params,
    listener: (res) => {
      console.log(`${topic}_${chain}_callback`, res);
    },
  });
};

const test = async () => {
  console.log('NftscanSDK:', NftscanSDK);

  const { NftscanEvm, EvmChain, NftscanWs, WSTopic } = NftscanSDK;

  // const evm = new NftscanEvm({
  //   apiKey: 'fdcCaA9D2L3paLihrdiRz75O',
  //   chain: EvmChain.ETH,
  // });
  // const result = await evm.asset.getAccountMinted('0xE6d884c5195Aa6187b554E542DEaDcF0C91a431a');
  // // console.log(result);

  const ws = new NftscanWs({
    apiKey: 'sX8hq33rN2ZE0hmuRHuTSMup',
  });

  const subIds = [];

  // on(ws, WSTopic.TRANSACTION, EvmChain.ETH).then((id) => {
  //   if (id) {
  //     subIds.push(id);
  //   }
  // });

  on(ws, WSTopic.TRANSACTION, EvmChain.ETH, { contract_address: ['0xd774557b647330c91bf44cfeab205095f7e6c367'] }).then(
    (id) => {
      if (id) {
        subIds.push(id);
      }
    },
  );

  on(ws, WSTopic.TRANSACTION, EvmChain.ETH).then((id) => {
    if (id) {
      subIds.push(id);
    }
  });

  on(ws, WSTopic.TRANSACTION, EvmChain.BNB).then((id) => {
    if (id) {
      subIds.push(id);
    }
  });

  on(ws, WSTopic.TRANSACTION, EvmChain.POLYGON).then((id) => {
    if (id) {
      subIds.push(id);
    }
  });

  on(ws, WSTopic.METADATA_REFRESH, EvmChain.ETH).then((id) => {
    if (id) {
      subIds.push(id);
    }
  });

  setTimeout(() => {
    subIds.forEach(async (item, index) => {
      // const res = await ws.off(`${item}${index === 1 ? 'test' : ''}`);
      // console.log('取消订阅', item, res);
    });
  }, 1000 * 60 * 0.2);
};

test();
