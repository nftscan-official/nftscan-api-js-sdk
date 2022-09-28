import { BaseNsPaginationResData } from '../../nftscan-type';

interface Attributes {
  /**
   * The attribute name
   */
  attribute_name: string;

  /**
   * The value for the attribute name
   */
  attribute_value: string;

  /**
   * How many items have this attribute value
   */
  percentage: string;
}

/**
 * The parameters of Asset, which represents a unique digital item whose ownership is managed by the blockchain
 * - details: {@link https://docs.nftscan.com/nftscan/Asset%20Model}
 */
export interface Asset {
  /**
   * The amount of the NFT (Default 1 for the ERC-721 NFT)
   */
  amount: string;

  /**
   * List of attributes
   */
  attributes: Array<Attributes>;

  /**
   * The content type
   */
  content_type: string;

  /**
   * The content URI to display
   */
  content_uri: string;

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
   * External link to the original website
   */
  external_link: string;

  /**
   * The image URI to display
   */
  image_uri: string;

  /**
   * The latest trade price for the item
   */
  latest_trade_price: number;

  /**
   * The latest trade symbol for the item
   */
  latest_trade_symbol: string;

  /**
   * The latest trade timestamp in milliseconds for the item
   */
  latest_trade_timestamp: number;

  /**
   * The metadata in JSON format
   */
  metadata_json: string;

  /**
   * The price when the item was minted (null if the item is an ERC-1155 NFT)
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
   * The unique ID generated for the item by NFTScan
   */
  nftscan_id: string;

  /**
   * The image URI stored by NFTScan (null if not stored by NFTScan)
   */
  nftscan_uri: string;

  /**
   * The user address who owns the item now (null if the item is an ERC-1155 NFT)
   */
  owner: string;

  /**
   * The token ID of the NFT in Number
   */
  token_id: string;

  /**
   * The token URI
   */
  token_uri: string;
}

/**
 * The common response parameters of EVM asset related API
 */
export interface CommonAssetResponse extends BaseNsPaginationResData {
  content: Array<Asset>;
}

/**
 * The response parameters of EVM API 'getAllAssets'
 */
export interface QueryAllAssetsResponse {
  /**
   * List of Asset Model
   */
  assets: Array<Asset>;

  /**
   * The contract address
   */
  contract_address: string;

  /**
   * The name of the contract
   */
  contract_name: string;

  /**
   * The description
   */
  description: string;

  /**
   * The floor price of the collection
   */
  floor_price: number;

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
