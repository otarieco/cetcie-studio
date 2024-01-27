import {type ProductVariantEditorial, ProductVariantEditorialProjection} from './productVariantEditorial';

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
    name?: string;
    values?: string[];
    _key?: string;
    _type?: 'option';
  }[];
  isDeleted?: boolean;
  variants: ProductStoreVariant[];
  tags?: string[];
  previewImageUrl?: string;
  priceRange?: {
    minVariantPrice?: number;
    maxVariantPrice?: number;
  };
  descriptionHtml?: string;
};

export type ProductStoreVariant =
  | {
      _ref?: string;
      _weak?: string;
      _key?: string;
      _type?: 'reference';
    }
  | {
      _id?: string;
      _updatedAt?: string;
      _createdAt?: string;
      _rev?: string;
      _type?: 'productVariant';
      store?: {
        id?: number;
        productId?: number;
        createdAt?: string;
        gid?: string;
        productGid?: string;
        sku?: string;
        title?: string;
        price?: number;
        compareAtPrice?: number;
        option1?: string;
        option2?: string;
        option3?: string;
        status?: string;
        isDeleted?: boolean;
        inventory?: {
          isAvailable?: boolean;
          management?: string;
          policy?: string;
        };
        previewImageUrl?: string;
      };
      editorial?: ProductVariantEditorial;
    };

export const ProductStoreProjection = `
  ...,
  variants[]->{
    ...,
    ${ProductVariantEditorialProjection},
   },
`;
