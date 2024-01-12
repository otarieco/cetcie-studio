import type {SanityDocument, Slug} from 'sanity';
import {SHOPIFY_DOCUMENTS} from '../../sanity.schemas';
import {type RichTextRegular} from '../../shared/objects/richTextRegular';
import {type Image} from '../../shared/objects/image';
import {type Seo} from '../../shared/objects/seo';
import type {Locale} from '../../shared/locale';
import type {RawCollection} from '../../shopify/documents/collection';

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

// Projection on shopify > documents > collection

export const collectionAdaptater = (rawCollection: RawCollection): Collection => ({
  _createdAt: rawCollection?._createdAt,
  _updatedAt: rawCollection?._updatedAt,
  _rev: rawCollection?._rev,
  _type: rawCollection?._type as SHOPIFY_DOCUMENTS.COLLECTION,
  _id: rawCollection?._id,
  locale: rawCollection?.locale,
  slug: rawCollection?.store?.slug as Slug,
  title: rawCollection?.editorial?.title,
  description: rawCollection?.editorial?.description,
  image: rawCollection?.editorial?.image,
  seo: rawCollection?.seo,
});