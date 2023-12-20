import type {PortableTextBlock} from '@portabletext/types';
import type {Media} from './media';
import {SANITY_FIELDS} from '../../sanity.schemas';
import type {Link} from './link';

export type RichTextBlog = (PortableTextBlock | Media | Link)[] & {
  _type: SANITY_FIELDS.RICHTEXT_BLOG;
};