import {SHOPIFY_DOCUMENTS} from '../../../sanity.schemas';
import type {SanityDocument, Slug} from 'sanity';
import type {Locale} from '../../../shared/locale';
import type {Seo} from '../../../shared/objects/seo';
import type {ProductVariantEditorial} from './productVariantEditorial';
import type {ProductEditorial} from './productEditorial';

/**
 * Type used in front-end
 * Transformation step (ProductRaw -> Product)
 */
export type Product = SanityDocument & {
  _type: SHOPIFY_DOCUMENTS.PRODUCT;
  locale?: Locale;
  slug?: Slug;
  productId?: number;
  title?: ProductEditorial['title'];
  description?: ProductEditorial['description'];
  priceRange?: {
    minVariantPrice?: number;
    maxVariantPrice?: number;
  };
  options?: {key?: string; values?: string[]}[];
  variants?: ProductVariant[];
  medias?: ProductEditorial['medias'];
  tabs?: ProductEditorial['tabs'];
  sections?: ProductEditorial['sections'];
  seo?: Seo;
};

export type ProductVariant = {
  variantId?: number;
  title?: string;
  isAvailable?: boolean;
  price?: number;
  compareAtPrice?: number;
  options?: {key?: string; value?: string}[];
  medias?: ProductVariantEditorial['medias'];
};

// ProductProjection on shopify > documents > product > rawProduct