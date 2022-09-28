import NftscanEvm from './api/evm/nftscan-evm';
import NftscanSolana from './api/solana/nftscan-solana';
import NftscanInit from './util/nftscan.init';

NftscanInit.onCreate();

export * from './types/index';
export { NftscanEvm, NftscanSolana };
