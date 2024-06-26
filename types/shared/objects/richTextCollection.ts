import type {PortableTextBlock} from '@portabletext/types';
import {SANITY_FIELDS} from '../../sanity.schemas';
import {type Image} from './image';
import { LinkProjection } from '../objects/linkInternal';

export type RichTextCollection = (PortableTextBlock | Image)[] & {
  _type: SANITY_FIELDS.RICHTEXT_COLLECTION;
};

export const RichTextCollectionProjection = `
  ...,
  markDefs[]{
    ...,
    _type == "page" => {
      ${LinkProjection}
    }
  }
`;
