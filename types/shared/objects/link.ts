import type {Slug} from 'sanity';
import {SANITY_FIELDS} from '../../sanity.schemas';
import type {Home} from '../../horse/singletons/home';

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
  document?: LinkDocRef;
  url?: string;
};