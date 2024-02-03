import type {RawCollection} from './rawCollection';
import {SHOPIFY_DOCUMENTS} from '../../../sanity.schemas';
import type {Slug} from 'sanity';
import type {Collection} from './collection';
import type {ProductLink} from '../../../shared/objects/link/product.link';

export const collectionAdapter = (
  rawCollection: RawCollection,
  products: ProductLink[],
): Collection => ({
  _createdAt: rawCollection?._createdAt,
  _updatedAt: rawCollection?._updatedAt,
  _rev: rawCollection?._rev,
  _type: rawCollection?._type as SHOPIFY_DOCUMENTS.COLLECTION,
  _id: rawCollection?._id,
  locale: rawCollection?.locale,
  slug: rawCollection?.store?.slug as Slug,
  title: rawCollection?.title,
  description: rawCollection?.description,
  image: rawCollection?.image,
  products,
  seo: rawCollection?.seo,
});
