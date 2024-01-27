import {type Image, ImageProjection} from '../image';
import type {Blog as HorseBlog} from '../../../horse/documents/blog';
import type {Blog as PetsBlog} from '../../../pets/documents/blog';
import type {Slug} from 'sanity';

export type BlogLink = {
  _id: string;
  _type: HorseBlog['_type'] | PetsBlog['_type'];
  locale?: string;
  title?: string;
  slug?: Slug;
  date?: string;
  coverImage?: Image;
};
export const BlogLinkProjection = `
  _id, 
  _type, 
  locale, 
  title, 
  slug, 
  date, 
  coverImage{${ImageProjection}}
`;
