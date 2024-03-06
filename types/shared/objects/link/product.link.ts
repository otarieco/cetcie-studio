import type {Product} from '../../../shopify/documents/product/product';
import {ImageProjection} from '../image';
import {MediaProjection} from '../media';

export type ProductLink = {
  _id: Product['_id'];
  _type: Product['_type'];
  locale?: Product['locale'];
  title?: Product['title'];
  slug?: Product['slug'];
  productId?: Product['productId'];
  productGid?: Product['productGid'];
  mediaMain?: Product['mediaMain'];
  mediaHover?: Product['mediaHover'];
  animalTypes?: Product['animalTypes'];
  variants?: Product['variants'];
};

/**
 * ProductLinkProjection fetch only few data to get faster response
 * Used for product links / product cards on collection
 */
export const ProductLinkProjection = `
  "_id": _id,
  "_type": _type,
  "locale": locale,
  "title": coalesce(title, store.title),
  "slug": store.slug,
  "productId": store.id, 
  "productGid": store.gid,
  "mediaMain": mediaMain{${MediaProjection}},
  "mediaHover": mediaHover{${MediaProjection}},
  "animalTypes": animalTypes[]->{_id, slug, name},
  "variants": store.variants[]->{
    "variantId": store.id,
    "variantGid": store.gid,
    "title": store.title,
    "isAvailable": store.inventory.isAvailable,
    "compareAtPrice": store.compareAtPrice,
    "price": store.price,
    "option1": store.option1,
    "images": images[]{${ImageProjection}},
  }
`;
