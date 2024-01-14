import type {SanityDocument, Slug} from 'sanity';
import {SHOPIFY_DOCUMENTS} from '../../../sanity.schemas';
import {type Seo} from '../../../shared/objects/seo';
import type {Locale} from '../../../shared/locale';
import type {CollectionEditorial} from './collectionEditorial';

/**
 * Type used in front-end
 * Transformation step (CollectionRaw -> Collection)
 */
export type Collection = SanityDocument &
  CollectionEditorial & {
    _type: SHOPIFY_DOCUMENTS.COLLECTION;
    locale?: Locale;
    slug?: Slug;
    seo?: Seo;
  };

// CollectionProjection on shopify > documents > collection