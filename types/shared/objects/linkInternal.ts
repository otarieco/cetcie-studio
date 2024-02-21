import {SANITY_FIELDS} from '../../sanity.schemas';
import {type PageLink, PageLinkProjection} from './link/page.link';
import {type BlogLink, BlogLinkProjection} from './link/blog.link';
import {type ProductLink, ProductLinkProjection} from './link/product.link';
import {type CollectionLink, CollectionLinkProjection} from './link/collection.link';

import {SHOPIFY_DOCUMENTS, SANITY_DOCUMENTS} from '../../sanity.schemas';


export type LinkDocRef = PageLink | BlogLink | ProductLink | CollectionLink | null;

export type LinkInternal = {
  _type: SANITY_FIELDS.LINK_INTERNAL;
  _key: string;
  title?: string;
  doc?: {
    _type: PageLink['_type'] | BlogLink['_type'] | ProductLink['_type'] | CollectionLink['_type'];
    slug: string | null;
  };
};

export const LinkProjection = /* groq */ `
  _type,
  _key,
  "title": coalesce(title, doc->title, doc->store.title),
  doc->{_type, "slug": coalesce(slug.current, store.slug.current) }
`;
