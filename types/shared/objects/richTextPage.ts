import type {PortableTextBlock} from '@portabletext/types';
import {SANITY_FIELDS} from '../../sanity.schemas';

export type RichTextPage = PortableTextBlock[] & {
  _type: SANITY_FIELDS.RICHTEXT_PAGE;
};

export const RichTextPageProjection = `
  ...
`;