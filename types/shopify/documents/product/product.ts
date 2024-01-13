import {SHOPIFY_DOCUMENTS} from '../../../sanity.schemas';
import type {SanityDocument, Slug} from 'sanity';
import type {Locale} from '../../../shared/locale';
import type {RichTextRegular} from '../../../shared/objects/richTextRegular';
import type {Seo} from '../../../shared/objects/seo';
import type {Media} from '../../../shared/objects/media';

/**
 * Type used in front-end
 * Transformation step (ProductRaw -> Product)
 */
export type Product = SanityDocument & {
  _type: SHOPIFY_DOCUMENTS.PRODUCT;
  _id?: number;
  locale?: Locale;
  title?: string;
  slug?: Slug;
  description?: RichTextRegular;
  price?: number;
  medias?: Media[];
  variants: ProductVariant[];
  seo?: Seo;
};

type ProductVariant = Omit<Product, 'variants' | 'seo'>;

// ProductProjection on shopify > documents > collection