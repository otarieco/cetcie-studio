import type {PortableTextBlock} from '@portabletext/types';
import {SANITY_FIELDS} from '../../sanity.schemas';
import type {Image} from './image';

export type RichTextComplex = (PortableTextBlock | Image)[] & {
  _type: SANITY_FIELDS.RICHTEXT_COMPLEX;
};