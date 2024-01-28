import type {SanityDocument, Slug} from 'sanity';
import {SHOPIFY_DOCUMENTS} from '../../../sanity.schemas';
import {type Seo} from '../../../shared/objects/seo';
import type {Locale} from '../../../shared/locale';
import type {CollectionEditorial} from './collectionEditorial';
import type {ProductLink} from '../../../shared/objects/link/product.link';

/**
 * Type used in front-end
 * Transformation step (CollectionRaw -> Collection)
 */
export type Collection = SanityDocument & {
  _type: SHOPIFY_DOCUMENTS.COLLECTION;
  locale?: Locale;
  slug?: Slug;
  title?: CollectionEditorial['title'];
  description?: CollectionEditorial['description'];
  image?: CollectionEditorial['image'];
  products?: ProductLink[];
  seo?: Seo;
};

// CollectionProjection on shopify > documents > collection > rawCollection