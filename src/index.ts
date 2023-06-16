import NftscanEvm from './api/evm/nftscan-evm';
import NftscanSolana from './api/solana/nftscan-solana';
import NftscanWs from './api/ws/nftscan.ws';
import NftscanInit from './util/nftscan.init';

NftscanInit.onCreate();

export * from './types/index';
export { NftscanEvm, NftscanSolana, NftscanWs };
