import type {Collection} from '../../../shopify/documents/collection/collection';
import type {Slug} from 'sanity';
import {type Image, ImageProjection} from '../image';

export type CollectionLink = {
  _id: string;
  _type: Collection['_type'];
  locale?: string;
  title?: string;
  slug?: Slug;
  image?: Image;
};

export const CollectionLinkProjection = `
  "_id": _id,
  "_type": _type,
  "locale": locale,
  "title": editorial.title, 
  "slug": store.slug,
  "image": editorial.image{${ImageProjection}}
`;
