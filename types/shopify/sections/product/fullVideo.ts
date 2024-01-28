import {SHOPIFY_SECTIONS} from '../../../sanity.schemas';
import type {MuxAsset} from 'sanity-plugin-mux-input/src/util/types';
import {VideoProjection} from '../../../shared/objects/media';

export type FullVideo = {
  _type: SHOPIFY_SECTIONS.PRODUCT_FULL_VIDEO;
  video?: MuxAsset;
};

export const FullVideoProjection = `
  ...,
  video{${VideoProjection}}
`;
