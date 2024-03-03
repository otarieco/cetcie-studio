import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type Image, ImageProjection} from '../../../shared/objects/image';

export type BiographyFullScreenImage = {
  _type: SANITY_SECTIONS.$HORSE_BIOGRAPHY_FULL_SCREEN_IMAGE;
  image?: Image;
};

export const BiographyFullScreenImageProjection = `
  ...,
  image{${ImageProjection}},
`;
