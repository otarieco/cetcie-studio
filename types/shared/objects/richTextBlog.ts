import type { PortableTextBlock } from '@portabletext/types';
import { type Media, MediaProjection } from './media';
import { SANITY_FIELDS } from '../../sanity.schemas';
import { type Link, LinkProjection } from './link';

export type RichTextBlog = (PortableTextBlock | Media | Link)[] & {
  _type: SANITY_FIELDS.RICHTEXT_BLOG;
};

export const RichTextBlogProjection = `
...,
// Annotations
markDefs[]{
  _type == "${SANITY_FIELDS.LINK}" => {
    ${LinkProjection}
  },
},

// Blocks
_type == "${SANITY_FIELDS.MEDIA}" => {
  ${MediaProjection}
}
`;