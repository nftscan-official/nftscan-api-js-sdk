import { EvmChain, NftscanConfig, NftscanSolanaConfig } from '../../types/nftscan-type';
import BaseApi from '../base-api';
import NftscanSolanaAsset from './asset';
import NftscanSolanaCollection from './collection';
import NftscanSolanaStatistic from './statistic';
import NftscanSolanaTransaction from './transaction';

/**
 * This class is the main entry point into NFTScan's Solana APIs and separates functionality into different object.
 * To use a different chain or API key, you should create a new instance of {@link NftscanSolana}
 *
 * The NFTScan API for Solana helps developers build new experiences retrieving NFTs and data analysis on the solana
 * blockchain. We provide a set of endpoints that enable you to fetch NFT assets as well as transactions, collections,
 * marketplace statistics and more.
 *
 * To use our APIs, You need to register an account on NFTScan open platform OpenAPI Platform({@link https://developer.nftscan.com/})
 * and get your API key for NFTScan SDK initialize config.
 */
export default class NftscanSolana extends BaseApi<NftscanConfig> {
  constructor(config: NftscanSolanaConfig) {
    super({ apiKey: config.apiKey, chain: 'solana' as EvmChain });
  }

  /**
   * The `asset` object contains methods for NFTScan's Solana asset API.
   */
  get asset(): NftscanSolanaAsset {
    return new NftscanSolanaAsset(this.config);
  }

  /**
   * The `transaction` object contains methods for NFTScan's Solana transaction API.
   */
  get transaction(): NftscanSolanaTransaction {
    return new NftscanSolanaTransaction(this.config);
  }

  /**
   * The `collection` object contains methods for NFTScan's Solana collection API.
   */
  get collection(): NftscanSolanaCollection {
    return new NftscanSolanaCollection(this.config);
  }

  /**
   * The `statistic` object contains methods for NFTScan's Solana statistic API.
   */
  get statistic(): NftscanSolanaStatistic {
    return new NftscanSolanaStatistic(this.config);
  }
}
