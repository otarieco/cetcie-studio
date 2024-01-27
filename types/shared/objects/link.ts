import {SANITY_FIELDS} from '../../sanity.schemas';
import {type PageLink, PageLinkProjection} from './link/page.link';
import {type BlogLink, BlogLinkProjection} from './link/blog.link';
import {type ProductLink, ProductLinkProjection} from './link/product.link';
import {type CollectionLink, CollectionLinkProjection} from './link/collection.link';

export type LinkDocRef = PageLink | BlogLink | ProductLink | CollectionLink | null;

export enum LinkType {
  page = 'page',
  external = 'external',
  blog = 'blog',
  product = 'product',
  collection = 'collection',
}

export type Link = {
  _type: SANITY_FIELDS.LINK;
  title?: string;
  linkType?: LinkType;
  doc?: LinkDocRef;
  url?: string;
};

export const LinkProjection = `
  _type,
  title,
  linkType,
  
  linkType == "${LinkType.external}" => {
     url,
  },
  linkType == "${LinkType.page}" => {
     doc->{${PageLinkProjection}}
  },
  linkType == "${LinkType.blog}" => {
     doc->{${BlogLinkProjection}}
  },
  linkType == "${LinkType.product}" => {
     doc->{${ProductLinkProjection}}
  },
  linkType == "${LinkType.collection}" => {
     doc->{${CollectionLinkProjection}}
  },  
`;
