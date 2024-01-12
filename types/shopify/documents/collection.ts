import type {SanityDocument} from 'sanity';
import {type CollectionEditorial, CollectionEditorialProjection} from './collectionEditorial';
import type {Locale} from '../../shared/locale';
import {type Seo, SeoProjection} from '../../shared/objects/seo';

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

export const CollectionProjection = `
   ...,
   editorial{${CollectionEditorialProjection}},
   store{...},
   seo{${SeoProjection}},
`;

/**
 * Data synced from Shopify and stored in Sanity
 */
type CollectionStore = {
  title?: string;
  isDeleted?: boolean;
  sortOrder?: string;
  id?: number;
  createdAt?: string;
  gid?: string;
  slug?: {
    current?: string;
    _type: 'slug';
  };
  disjunctive?: boolean;
  imageUrl?: string;
  descriptionHtml?: string;
  rules: {
    condition?: string;
    _type?: string;
    column?: string;
    _key?: string;
    relation?: string;
  }[];
};