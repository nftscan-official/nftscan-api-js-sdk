import { BaseNsPaginationResData } from '../../nftscan-type';

/**
 * The parameters of Asset, which represents a unique digital item whose ownership is managed by the blockchain
 * - details: {@link https://docs.nftscan.com/solana/Asset%20Model}
 */
export interface Asset {
  /**
   * The block number
   */
  block_number: number;

  /**
   * The collection
   */
  collection: string;

  /**
   * The content type
   */
  content_type: string;

  /**
   * The content URI to display
   */
  content_uri: string;

  /**
   * External link to the original website
   */
  external_link: string;

  /**
   * The image URI to display
   */
  image_uri: string;

  /**
   * The program interacted with when the item was minted
   */
  interact_program: string;

  /**
   * The latest trade price for the item
   */
  latest_trade_price: number;

  /**
   * The latest trade timestamp in milliseconds for the item
   */
  latest_trade_timestamp: number;

  /**
   * The latest trade transaction hash for the item
   */
  latest_trade_transaction_hash: string;

  /**
   * The metadata in JSON format
   */
  metadata_json: string;

  /**
   * The price when the item was minted
   */
  mint_price: number;

  /**
   * The timestamp in milliseconds when the item was minted
   */
  mint_timestamp: number;

  /**
   * The transaction hash when the item was minted
   */
  mint_transaction_hash: string;

  /**
   * The user address who minted the item
   */
  minter: string;

  /**
   * The name
   */
  name: string;

  /**
   * The user address who owns the item now
   */
  owner: string;

  /**
   * The token address of the NFT
   */
  token_address: string;

  /**
   * The token URI
   */
  token_uri: string;
}

/**
 * The common response parameters of Solana asset related API
 */
export interface CommonAssetResponse extends BaseNsPaginationResData {
  content: Array<Asset>;
}

export interface QueryAllAssetsResponse {
  assets: Array<Asset>;

  /**
   * The collection
   */
  collection: string;

  /**
   * The description
   */
  description: string;

  /**
   * How many items for the collection
   */
  items_total: number;

  /**
   * The logo URL
   */
  logo_url: string;

  /**
   * How many items the account address owns
   */
  owns_total: number;
}
