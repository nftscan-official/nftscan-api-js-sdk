/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */

const NftscanSDK = typeof window !== 'undefined' ? window.NftscanSDK : require('../dist/umd/index.js');

const test = async () => {
  console.log('support chain', NftscanSDK.EvmChain);

  const evm = new NftscanSDK.NftscanEvm({
    apiKey: '',
    chain: NftscanSDK.EvmChain.STARKNET,
  });

  const result = await evm.asset.getAccountMinted('');
  console.log(result);

  // const sol = new NftscanSDK.NftscanSolana({ apiKey: '' });
  // const result1 = await sol.asset.getAccountMinted('');
  // console.log(result1);

  // const result = await evm.statistic.getWalletRanking({ sort_field: 'trade_count', limit: 50 });
  // console.log(result);
};

const main = () => {
  if (typeof window === 'undefined') {
    test();
    return;
  }

  window.onload = () => {
    test();
  };
};

main();
