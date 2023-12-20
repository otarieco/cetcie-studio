import {SanityDocument, Slug} from 'sanity';
import {SANITY_DOCUMENTS} from '../../sanity.schemas';
import {Image} from '../../shared/objects/image';
import {RichTextBlog} from '../../shared/objects/richTextBlog';
import {Seo} from '../../shared/objects/seo';

export type Blog = SanityDocument & {
  _type: SANITY_DOCUMENTS.$PETS_BLOG;
  title?: string;
  slug?: Slug;
  date?: string;
  coverImage?: Image;
  body?: RichTextBlog;
  seo?: Seo;
};