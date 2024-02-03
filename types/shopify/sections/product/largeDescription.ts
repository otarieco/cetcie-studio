import {SHOPIFY_SECTIONS} from '../../../sanity.schemas';
import {
  type RichTextProductLargeDescription,
  RichTextProductLargeDescriptionProjection,
} from '../../../shared/objects/richTextProductLargeDescription';

export type LargeDescription = {
  _type: SHOPIFY_SECTIONS.PRODUCT_LARGE_DESCRIPTION;
  description?: RichTextProductLargeDescription;
};

export const LargeDescriptionProjection = `
  ...,
  description[]{${RichTextProductLargeDescriptionProjection}}
`;
