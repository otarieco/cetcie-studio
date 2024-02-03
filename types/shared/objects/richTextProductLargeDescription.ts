import type {PortableTextBlock} from '@portabletext/types';
import {SANITY_FIELDS} from '../../sanity.schemas';
import {type MediaExtra, MediaExtraProjection} from './mediaExtra';

export type RichTextProductLargeDescription = (PortableTextBlock | MediaExtra)[] & {
  _type: SANITY_FIELDS.RICHTEXT_BLOG;
};

export const RichTextProductLargeDescriptionProjection = `
  ...,
  
  // Blocks
  _type == "${SANITY_FIELDS.MEDIA_EXTRA}" => {
    ${MediaExtraProjection}
  }
`;
