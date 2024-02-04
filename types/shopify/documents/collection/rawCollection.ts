import type {SanityDocument} from 'sanity';
import type {Locale} from '../../../shared/locale';
import {type Seo, SeoProjection} from '../../../shared/objects/seo';
import {type CollectionStore, CollectionStoreProjection} from './collectionStore';
import {type RichTextProduct} from '../../../shared/objects/richTextProduct';
import {type Image, ImageProjection} from '../../../shared/objects/image';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';
import {RichTextCollectionProjection} from '../../../shared/objects/richTextCollection';
import {type ProductLink, ProductLinkProjection} from '../../../shared/objects/link/product.link';

/**
 * CollectionRaw is the collection type stored in Sanity
 * Before his transformation into Collection type
 */
export type RawCollection = SanityDocument & {
  locale?: Locale;

  /* Details */
  title?: string;
  description?: RichTextLite;
  image?: Image;
  extraDescription?: RichTextProduct;
  collectionEssentials?: ProductLink[];

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
   description[]{${RichTextLiteProjection}},
   image{${ImageProjection}},
   extraDescription[]{${RichTextCollectionProjection}},
   collectionEssentials[]->{${ProductLinkProjection}},
   store{${CollectionStoreProjection}},
   seo{${SeoProjection}},
`;
