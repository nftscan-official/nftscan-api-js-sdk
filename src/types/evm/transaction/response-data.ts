import { BaseNsPaginationResData } from '../../nftscan-type';

/**
 * The parameters of Transaction, which represents one transaction for an NFT asset on the blockchain.
 * - details: {@link https://docs.nftscan.com/nftscan/Transaction%20Model}
 */
export interface Transaction {
  /**
   * The amount of the NFT (Default 1 for the ERC-721 NFT)
   */
  amount: string;

  /**
   * The block hash
   */
  block_hash: string;

  /**
   * The block number
   */
  block_number: number;

  /**
   * The contract address
   */
  contract_address: string;

  /**
   * The name of the contract
   */
  contract_name: string;

  /**
   * The token ID of the NFT in Hex
   */
  contract_token_id: string;

  /**
   * The erc type of the NFT (erc721 or erc1155)
   */
  erc_type: string;

  /**
   * The NFT event type of the transaction (Mint, Transfer, Sale)
   */
  event_type: string;

  /**
   * The NFT trading exchange name (Only for Sale)
   */
  exchange_name: string;

  /**
   * The param `from` of the transaction
   */
  from: string;

  /**
   * The transaction fee in Decimal
   */
  gas_fee: number;

  /**
   * The gas price in Hex
   */
  gas_price: string;

  /**
   * How much gas was used in the transaction in Hex
   */
  gas_used: string;

  /**
   * Transaction hash
   */
  hash: string;

  /**
   * The unique ID generated for the transaction record by NFTScan
   */
  nftscan_tx_id: string;

  /**
   * The user address who received the NFT
   */
  receive: string;

  /**
   * The user address who sent the NFT
   */
  send: string;

  /**
   * The timestamp in milliseconds of the transaction
   */
  timestamp: number;

  /**
   * The param `to` of the transaction
   */
  to: string;

  /**
   * The token ID of the NFT in Number
   */
  token_id: string;

  /**
   * The trade price of the transaction in Number
   */
  trade_price: number;

  /**
   * The trade symbol of the trade price
   */
  trade_symbol: string;

  /**
   * The trade value of the transaction in Hex
   */
  trade_value: string;
}

/**
 * The common response parameters of EVM transaction related API
 */
export interface CommonTransactionResponse extends BaseNsPaginationResData {
  content: Array<Transaction>;
}
