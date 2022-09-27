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
 * The parameters of Collection, which represents a collection on the solana blockchain.
 * - details: {@link https://docs.nftscan.com/solana/Collection%20Model}
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
   * The collection
   */
  collection: string;

  /**
   * The first block number for the occurrence of the collection
   */
  create_block_number: number;

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
   * The featured URL
   */
  featured_url: string;

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
   * How many owners for the collection
   */
  owners_total: number;

  /**
   * The symbol of the collection
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
