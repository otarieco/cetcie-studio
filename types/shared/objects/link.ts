import type { Slug } from 'sanity';
import { SANITY_FIELDS } from '../../sanity.schemas';
import type { Home } from '../../horse/singletons/home';
import { ImageProjection } from './image';

export type LinkDocRef = {
  _id: string;
  _type: Home['_type'];
  title?: string;
  slug?: Slug;
} | null;

export type Link = {
  _type: SANITY_FIELDS.LINK;
  title?: string;
  linkType?: 'page' | 'external' | 'blog' | 'product' | 'collection';
  doc?: LinkDocRef;
  url?: string;
};

export const LinkProjection = `
  title,
  linkType == "external" => {
     url,
  },
  linkType == "page" => {
     doc->{_type, locale, title, slug}
  },
  linkType == "blog" => {
     doc->{_type, locale, title, slug, date, coverImage{${ImageProjection}}}
  },
  linkType == "product" => {
     doc->{...}
  },
  linkType == "collection" => {
     doc->{...}
  },  
`;