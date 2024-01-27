import type {PortableTextBlock} from '@portabletext/types';
import {SANITY_FIELDS} from '../../sanity.schemas';
import {type Image} from './image';

export type RichTextProduct = (PortableTextBlock | Image)[] & {
  _type: SANITY_FIELDS.RICHTEXT_PRODUCT;
};

export const RichTextProductProjection = `
  ...
`;
