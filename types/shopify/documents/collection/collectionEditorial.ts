import {type RichTextProduct, RichTextProductProjection} from '../../../shared/objects/richTextProduct';
import {type Image, ImageProjection} from '../../../shared/objects/image';

/**
 * Custom fields to enhance Shopify collection
 */
export type CollectionEditorial = {
  title?: string;
  description?: RichTextProduct;
  image?: Image;
};

export const CollectionEditorialProjection = `
   ...,
   description[]{
    ${RichTextProductProjection},
   },
   image{${ImageProjection}},
`;
