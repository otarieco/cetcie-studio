import {type Image, ImageProjection} from '../../../shared/objects/image';

export type ProductVariantEditorial = {
  images?: Image[];
};

export const ProductVariantEditorialProjection = `
  ...,
  images[]{${ImageProjection}}
`;
