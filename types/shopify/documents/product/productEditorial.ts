import {type RichTextRegular, RichTextRegularProjection} from '../../../shared/objects/richTextRegular';
import {type Media, MediaProjection} from '../../../shared/objects/media';

/**
 * Custom fields to enhance Shopify product
 */
export type ProductEditorial = {
  title?: string;
  description?: RichTextRegular;
  medias?: Media[];
  tabs?: {
    title?: string;
    content?: RichTextRegular;
  }[];
  advice?: {
    label?: string;
    title?: string;
    description?: string;
    media?: Media;
  };
};

export const ProductEditorialProjection = `
  ...,
  description[]{
  ${RichTextRegularProjection},
  },
  medias[]{${MediaProjection}},
  tabs[]{
    ...,
    ${RichTextRegularProjection},
  },
  advice{
    ...,
    media{${MediaProjection}},
  }
`;