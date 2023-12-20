import type {PortableTextBlock} from '@portabletext/types';
import {SANITY_FIELDS} from '../../sanity.schemas';
import type {Image} from './image';

export type RichTextRegular = (PortableTextBlock | Image)[] & {
  _type: SANITY_FIELDS.RICHTEXT_REGULAR;
};