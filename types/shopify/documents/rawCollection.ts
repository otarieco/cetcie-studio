import type {SanityDocument} from 'sanity';
import {type CollectionEditorial, CollectionEditorialProjection} from './collectionEditorial';
import type {Locale} from '../../shared/locale';
import {type Seo, SeoProjection} from '../../shared/objects/seo';
import {type CollectionStore, CollectionStoreProjection} from './collectionStore';

/**
 * CollectionRaw is the collection type stored in Sanity
 * Before his transformation into Collection type
 */
export type RawCollection = SanityDocument & {
  locale?: Locale;
  editorial?: CollectionEditorial;
  store?: CollectionStore;
  seo?: Seo;
};

/**
 * CollectionProjection fetch for RawCollection format
 */
export const CollectionProjection = `
   ...,
   editorial{${CollectionEditorialProjection}},
   store{${CollectionStoreProjection}},
   seo{${SeoProjection}},
`;