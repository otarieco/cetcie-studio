import type {SanityDocument, Slug} from 'sanity';
import {SANITY_DOCUMENTS} from '../../sanity.schemas';
import type {Image} from '../../shared/objects/image';
import type {RichTextBlog} from '../../shared/objects/richTextBlog';
import type {Seo} from '../../shared/objects/seo';

export type Blog = SanityDocument & {
  _type: SANITY_DOCUMENTS.$HORSE_BLOG;
  title?: string;
  slug?: Slug;
  date?: string;
  coverImage?: Image;
  body?: RichTextBlog;
  seo?: Seo;
};