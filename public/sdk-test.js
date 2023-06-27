/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */

const NftscanSDK = window !== undefined ? window.NftscanSDK : require('../dist/umd/index.js');

const test = async () => {
  console.log('---the support chain--->\n', NftscanSDK.EvmChain);

  const evm = new NftscanSDK.NftscanEvm({
    apiKey: '',
    chain: NftscanSDK.EvmChain.ETH,
  });

  // const result = await evm.asset.getAccountMinted('0xE6d884c5195Aa6187b554E542DEaDcF0C91a431a');
  // console.log(result);

  // const sol = new NftscanSDK.NftscanSolana({ apiKey: '' });
  // const result1 = await sol.asset.getAccountMinted('HrpADsnPdmbaxBDPHiJbd2kUoKqSXkyMBd71uFqc7BHS');
  // console.log(result1);

  const result = await evm.statistic.getWalletRanking({ sort_field: 'trade_count', limit: 50 });
  console.log(result);
};

const main = () => {
  if (window !== undefined) {
    window.onload = () => {
      test();
    };
    return;
  }
  test();
};

main();
