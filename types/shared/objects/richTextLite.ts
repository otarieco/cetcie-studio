import type { PortableTextBlock } from '@portabletext/types';
import { SANITY_FIELDS } from '../../sanity.schemas';

export type RichTextLite = PortableTextBlock[] & {
  _type: SANITY_FIELDS.RICHTEXT_LITE;
};

export const RichTextLiteProjection = `
  ...,
`;