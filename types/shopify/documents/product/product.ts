import {SHOPIFY_DOCUMENTS} from '../../../sanity.schemas';
import type {SanityDocument, Slug} from 'sanity';
import type {Locale} from '../../../shared/locale';
import type {Seo} from '../../../shared/objects/seo';
import type {RawProduct} from './rawProduct';
import type {Image} from '../../../shared/objects/image';

/**
 * Type used in front-end
 * Transformation step (ProductRaw -> Product)
 */
export type Product = SanityDocument & {
  _type: SHOPIFY_DOCUMENTS.PRODUCT;
  locale?: Locale;
  slug?: Slug;
  productId?: number;
  productGid?: string;
  title?: RawProduct['title'];
  description?: RawProduct['description'];
  animalTypes?: RawProduct['animalTypes'];
  priceRange?: {
    minVariantPrice?: number;
    maxVariantPrice?: number;
  };
  activeIngredientsAndProperties?: RawProduct['activeIngredientsAndProperties'];
  composition?: RawProduct['composition'];
  usageInstructions?: RawProduct['usageInstructions'];
  mediaMain?: RawProduct['mediaMain'];
  mediaHover?: RawProduct['mediaHover'];
  mediaBanner?: RawProduct['mediaBanner'];
  sections?: RawProduct['sections'];
  options?: {key?: string; values?: string[]}[];
  variants?: ProductVariant[];
  seo?: Seo;
};

export type ProductVariant = {
  variantId?: number;
  variantGid?: string;
  title?: string;
  isAvailable?: boolean;
  price?: number;
  compareAtPrice?: number;
  options?: {key?: string; value?: string}[];
  images?: Image[];
};
