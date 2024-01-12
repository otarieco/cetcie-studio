import type {PortableTextBlock} from '@portabletext/types';
import {SANITY_FIELDS} from '../../sanity.schemas';
import {type Image, ImageProjection} from './image';

export type RichTextComplex = (PortableTextBlock | Image)[] & {
  _type: SANITY_FIELDS.RICHTEXT_COMPLEX;
};

export const RichTextComplexProjection = `
  ...,
  image{${ImageProjection}}
`;