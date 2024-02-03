import type {SanityDocument} from 'sanity';
import type {Locale} from '../../../shared/locale';
import {type Seo, SeoProjection} from '../../../shared/objects/seo';
import {type CollectionStore, CollectionStoreProjection} from './collectionStore';
import {type RichTextProduct, RichTextProductProjection} from '../../../shared/objects/richTextProduct';
import {type Image, ImageProjection} from '../../../shared/objects/image';

/**
 * CollectionRaw is the collection type stored in Sanity
 * Before his transformation into Collection type
 */
export type RawCollection = SanityDocument & {
  locale?: Locale;

  /* Details */
  title?: string;
  description?: RichTextProduct;
  image?: Image;

  /* Shopify */
  store?: CollectionStore;

  /* Seo */
  seo?: Seo;
};

/**
 * RawCollectionProjection fetch for RawCollection format
 */
export const RawCollectionProjection = `
   ...,
   description[]{
    ${RichTextProductProjection},
   },
   image{${ImageProjection}},
   store{${CollectionStoreProjection}},
   seo{${SeoProjection}},
`;
