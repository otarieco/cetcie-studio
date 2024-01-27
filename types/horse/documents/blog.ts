import type {SanityDocument, Slug} from 'sanity';
import {SANITY_DOCUMENTS} from '../../sanity.schemas';
import {type Image, ImageProjection} from '../../shared/objects/image';
import {type RichTextBlog, RichTextBlogProjection} from '../../shared/objects/richTextBlog';
import {type Seo, SeoProjection} from '../../shared/objects/seo';
import type {Locale} from '../../shared/locale';

export type Blog = SanityDocument & {
  _type: SANITY_DOCUMENTS.$HORSE_BLOG;
  locale?: Locale;
  title?: string;
  slug?: Slug;
  date?: string;
  coverImage?: Image;
  body?: RichTextBlog;
  seo?: Seo;
};

export const BlogProjection = `
   ...,
   coverImage{${ImageProjection}},
   body[]{
    ${RichTextBlogProjection},
   },
   seo{${SeoProjection}},
`;
