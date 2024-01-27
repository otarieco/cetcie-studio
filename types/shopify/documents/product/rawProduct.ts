import type {SanityDocument} from 'sanity';
import type {Locale} from '../../../shared/locale';
import {type Seo, SeoProjection} from '../../../shared/objects/seo';
import {type ProductEditorial, ProductEditorialProjection} from './productEditorial';
import {type ProductStore, ProductStoreProjection} from './productStore';

/**
 * CollectionRaw is the collection type stored in Sanity
 * Before his transformation into Collection type
 */
export type RawProduct = SanityDocument & {
  locale?: Locale;
  editorial?: ProductEditorial;
  store?: ProductStore;
  seo?: Seo;
};

/**
 * ProductProjection fetch for RawCollection format
 */
export const ProductProjection = `
   ...,
   editorial{${ProductEditorialProjection}},
   store{${ProductStoreProjection}},
   seo{${SeoProjection}},
`;
