import {SHOPIFY_SECTIONS} from '../../../sanity.schemas';
import {type Media, MediaProjection} from '../../../shared/objects/media';

export type Advice = {
  _type: SHOPIFY_SECTIONS.PRODUCT_ADVICE;
  label?: string;
  title?: string;
  description?: string;
  media?: Media;
};

export const AdviceProjection = `
  ...,
  media{${MediaProjection}}
`;