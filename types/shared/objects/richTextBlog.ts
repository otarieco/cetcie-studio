import {PortableTextBlock} from '@portabletext/types';
import {Media} from './media';
import {SANITY_FIELDS} from '../../sanity.schemas';
import {Link} from './link';

export type RichTextBlog = (PortableTextBlock | Media | Link)[] & {
  _type: SANITY_FIELDS.RICHTEXT_BLOG;
};