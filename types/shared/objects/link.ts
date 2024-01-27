import type {Slug} from 'sanity';
import {SANITY_FIELDS} from '../../sanity.schemas';
import type {Home as HorseHome} from '../../horse/singletons/home';
import {type Image, ImageProjection} from './image';
import {ProductProjection, type RawProduct} from '../../shopify/documents/product/rawProduct';
import {
  CollectionProjection,
  type RawCollection,
} from '../../shopify/documents/collection/rawCollection';
import type {Home as PetsHome} from '../../pets/singletons/home';
import type {About as HorseAbout} from '../../horse/singletons/about';
import type {About as PetsAbout} from '../../pets/singletons/about';
import type {Contact as HorseContact} from '../../horse/singletons/contact';
import type {Contact as PetsContact} from '../../pets/singletons/contact';
import type {Page as HorsePage} from '../../horse/documents/page';
import type {Page as PetsPage} from '../../pets/documents/page';
import type {Product} from '../../shopify/documents/product/product';
import type {Collection} from '../../shopify/documents/collection/collection';
import type {Blog as HorseBlog} from '../../horse/documents/blog';
import type {Blog as PetsBlog} from '../../pets/documents/blog';

type PageDocRef = {
  _id: string;
  _type:
    | HorseHome['_type']
    | PetsHome['_type']
    | HorseAbout['_type']
    | PetsAbout['_type']
    | HorseContact['_type']
    | PetsContact['_type']
    | HorsePage['_type']
    | PetsPage['_type']
    | HorseBlog['_type'];
  locale?: string;
  title?: string;
  slug?: Slug;
};

type BlogDocRef = {
  _id: string;
  _type: HorseBlog['_type'] | PetsBlog['_type'];
  locale?: string;
  title?: string;
  slug?: Slug;
  date?: string;
  coverImage?: Image;
};

type ProductDocRef = {
  _id: string;
  _type: Product['_type'];
  locale?: string;
  title?: string;
  slug?: Slug;
  product?: RawProduct;
};

type CollectionDocRef = {
  _id: string;
  _type: Collection['_type'];
  locale?: string;
  title?: string;
  slug?: Slug;
  collection?: RawCollection;
};

export type LinkDocRef = PageDocRef | BlogDocRef | ProductDocRef | CollectionDocRef | null;

export type Link = {
  _type: SANITY_FIELDS.LINK;
  title?: string;
  linkType?: 'page' | 'external' | 'blog' | 'product' | 'collection';
  doc?: LinkDocRef;
  url?: string;
};

export const LinkProjection = `
  _type,
  title,
  linkType,
  
  linkType == "external" => {
     url,
  },
  linkType == "page" => {
     doc->{_id, _type, locale, title, slug}
  },
  linkType == "blog" => {
     doc->{_id, _type, locale, title, slug, date, coverImage{${ImageProjection}}}
  },
  linkType == "product" => {
     doc->{${ProductProjection}}
  },
  linkType == "collection" => {
     doc->{${CollectionProjection}}
  },  
`;
