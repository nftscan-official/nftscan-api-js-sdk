import { BaseNsPaginationResData } from '../../nftscan-type';

/**
 * The parameters of Transaction, which represents one transaction for an NFT asset on the blockchain.
 * - details: {@link https://docs.nftscan.com/solana/Transaction%20Model}
 */
export interface Transaction {
  /**
   * 	The block number
   */
  block_number: number;

  /**
   * The collection
   */
  collection: string;

  /**
   * 	Destination Wallet Address
   */
  destination: string;

  /**
   * The NFT event type of the transaction (Mint, Transfer, Sale, Burn)
   */
  event_type: string;

  /**
   * The NFT trading exchange name (Only for Sale)
   */
  exchange_name: string;

  /**
   * The fee for the transaction
   */
  fee: number;

  /**
   * Transaction hash
   */
  hash: string;

  /**
   * The program interacted with
   */
  interact_program: string;

  /**
   * The unique ID generated for the transaction record by NFTScan
   */
  nftscan_tx_id: string;

  /**
   * 	Source Wallet Address
   */
  source: string;

  /**
   * The timestamp in milliseconds of the transaction
   */
  timestamp: number;

  /**
   * The token address
   */
  token_address: string;

  /**
   * The trade price of the transaction in Number
   */
  trade_price: number;
}

/**
 * The common response parameters of Solana transaction related API
 */
export interface CommonTransactionResponse extends BaseNsPaginationResData {
  content: Array<Transaction>;
}
