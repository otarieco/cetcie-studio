import {SHOPIFY_SECTIONS} from '../../../sanity.schemas';
import {type Video, VideoProjection} from '../../../shared/objects/video';

export type FullVideo = {
  _type: SHOPIFY_SECTIONS.PRODUCT_FULL_VIDEO;
  video?: Video;
};

export const FullVideoProjection = `
  ...,
  video{${VideoProjection}}
`;
