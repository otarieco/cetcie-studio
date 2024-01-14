import {type Media, MediaProjection} from '../../../shared/objects/media';

export type ProductVariantEditorial = {
  medias?: Media[];
};

export const ProductVariantEditorialProjection = `
  ...,
  medias[]{${MediaProjection}}
`;