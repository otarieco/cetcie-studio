/**
 * Data synced from Shopify and stored in Sanity
 */
export type ProductStore = {
  id?: number;
  status?: string;
  vendor?: string;
  title?: string;
  createdAt?: string;
  gid?: string;
  productType?: string;
  slug?: {
    current?: string;
    _type: 'slug';
  };
  options?: {
    values?: {
      _type?: string;
      name?: string;
      _key?: string;
    };
  }[];
  isDeleted?: boolean;
  variants: {
    _weak?: boolean;
    _ref?: string;
    _type?: string;
    _key?: string;
  }[];
  tags?: string[];
  previewImageUrl?: string;
  priceRange?: {
    minVariantPrice?: number;
    maxVariantPrice?: number;
  };
  descriptionHtml?: string;
};

export const CollectionStoreProjection = `
  ...
`;