import {PortableTextBlock} from '@portabletext/types';
import {SANITY_FIELDS} from '../../sanity.schemas';
import {Image} from './image';

export type RichTextComplex = (PortableTextBlock | Image)[] & {
  _type: SANITY_FIELDS.RICHTEXT_COMPLEX;
};