import {SHOPIFY_SECTIONS} from '../../../sanity.schemas';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';

export type LargeDescription = {
  _type: SHOPIFY_SECTIONS.PRODUCT_LARGE_DESCRIPTION;
  description?: RichTextLite;
};

export const LargeDescriptionProjection = `
  ...,
  description[]{${RichTextLiteProjection}}
`;
