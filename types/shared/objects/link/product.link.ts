import type {Product, ProductVariant} from '../../../shopify/documents/product/product';
import type {Slug} from 'sanity';
import type {Locale} from '../../locale';
import {MediaProjection} from '../media';

export type ProductLink = {
  _id: string;
  _type: Product['_type'];
  locale?: Locale;
  title?: string;
  slug?: Slug;
  productId?: number;
  variants?: ProductVariant[];
};

/**
 * ProductLinkProjection fetch only few data to get faster response
 * Used for product links / product cards on collection
 */
export const ProductLinkProjection = `
  "_id": _id,
  "_type": _type,
  "locale": locale,
  "title": editorial.title, 
  "slug": store.slug,
  "productId": store.id,
  "variants": store.variants[]->{
    "variantId": store.id,
    "title": store.title,
    "isAvailable": store.inventory.isAvailable,
    "compareAtPrice": store.compareAtPrice,
    "price": store.price,
    "option1": store.option1,
    "medias": editorial.medias[]{${MediaProjection}},
  }
`;
