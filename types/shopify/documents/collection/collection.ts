import type {SanityDocument, Slug} from 'sanity';
import {SHOPIFY_DOCUMENTS} from '../../../sanity.schemas';
import {type RichTextRegular} from '../../../shared/objects/richTextRegular';
import {type Image} from '../../../shared/objects/image';
import {type Seo} from '../../../shared/objects/seo';
import type {Locale} from '../../../shared/locale';

/**
 * Type used in front-end
 * Transformation step (CollectionRaw -> Collection)
 */
export type Collection = SanityDocument & {
  _type: SHOPIFY_DOCUMENTS.COLLECTION;
  locale?: Locale;
  title?: string;
  slug?: Slug;
  description?: RichTextRegular;
  image?: Image;
  seo?: Seo;
};

// CollectionProjection on shopify > documents > collection