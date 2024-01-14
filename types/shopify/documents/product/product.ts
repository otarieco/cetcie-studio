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
export type Product = SanityDocument &
  ProductEditorial & {
    _type: SHOPIFY_DOCUMENTS.PRODUCT;
    locale?: Locale;
    slug?: Slug;
    variants?: ProductVariant[];
    seo?: Seo;
  };

export type ProductVariant = ProductVariantEditorial & {
  price?: number;
  productId?: number;
  variantId?: number;
  isAvailable?: boolean;
};

// ProductProjection on shopify > documents > collection