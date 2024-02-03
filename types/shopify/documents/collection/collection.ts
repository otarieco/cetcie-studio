import type {SanityDocument, Slug} from 'sanity';
import {SHOPIFY_DOCUMENTS} from '../../../sanity.schemas';
import {type Seo} from '../../../shared/objects/seo';
import type {Locale} from '../../../shared/locale';
import type {ProductLink} from '../../../shared/objects/link/product.link';
import type {RawCollection} from './rawCollection';

/**
 * Type used in front-end
 * Transformation step (CollectionRaw -> Collection)
 */
export type Collection = SanityDocument & {
  _type: SHOPIFY_DOCUMENTS.COLLECTION;
  locale?: Locale;
  slug?: Slug;
  title?: RawCollection['title'];
  description?: RawCollection['description'];
  image?: RawCollection['image'];
  products?: ProductLink[];
  seo?: Seo;
};
