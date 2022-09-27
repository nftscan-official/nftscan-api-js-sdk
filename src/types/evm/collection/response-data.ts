interface AttributesValues {
  /**
   * The value for the attribute name
   */
  attributes_value: string;

  /**
   * How many items have this attribute value
   */
  total: number;
}

interface Attributes {
  /**
   * The name of the attribute
   */
  attributes_name: string;

  /**
   * The values for the attribute
   */
  attributes_values: Array<AttributesValues>;

  /**
   * How many kind of value for the attribute name
   */
  total: string;
}

/**
 * The parameters of Collection, which represents an NFT contract address on the blockchain.
 * - details: {@link https://docs.nftscan.com/nftscan/Collection%20Model}
 */
export interface Collection {
  /**
   * The attributes distribution of the collection
   */
  attributes: Array<Attributes>;

  /**
   * The banner URL
   */
  banner_url: string;

  /**
   * The contract address of collections with the same name
   */
  collections_with_same_name: Array<string>;

  /**
   * The contract address
   */
  contract_address: string;

  /**
   * The block number when the contract was deployed
   */
  deploy_block_number: number;

  /**
   * The description
   */
  description: string;

  /**
   * The discord
   */
  discord: string;

  /**
   * The email
   */
  email: string;

  /**
   * The erc type of the collection
   */
  erc_type: string;

  /**
   * The featured URL
   */
  featured_url: string;

  /**
   * The floor price of the collection
   */
  floor_price: number;

  /**
   * The github
   */
  github: string;

  /**
   * The instagram
   */
  instagram: string;

  /**
   * How many items for the collection
   */
  items_total: number;

  /**
   * The large image URL
   */
  large_image_url: string;

  /**
   * The logo URL
   */
  logo_url: string;

  /**
   * The medium
   */
  medium: string;

  /**
   * The name
   */
  name: string;

  /**
   * The floor price of the collection on opensea
   */
  opensea_floor_price: number;

  /**
   * The user address who owns the contract
   */
  owner: string;

  /**
   * How many owners for the collection
   */
  owners_total: number;

  /**
   * The price symbol of the collection
   */
  price_symbol: string;

  /**
   * The royalty for the owner in basis point
   */
  royalty: number;

  /**
   * The symbol
   */
  symbol: string;

  /**
   * The telegram
   */
  telegram: string;

  /**
   * The twitter
   */
  twitter: string;

  /**
   * Whether the collection is verified on NFTScan
   */
  verified: boolean;

  /**
   * The website
   */
  website: string;
}
