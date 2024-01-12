import {type RichTextRegular, RichTextRegularProjection} from '../../../shared/objects/richTextRegular';
import {type Image, ImageProjection} from '../../../shared/objects/image';

/**
 * Custom fields to enhance Shopify collection
 */
export type CollectionEditorial = {
  title?: string;
  description?: RichTextRegular;
  image?: Image;
};

export const CollectionEditorialProjection = `
   ...,
   description[]{
    ${RichTextRegularProjection},
   },
   image{${ImageProjection}},
`;