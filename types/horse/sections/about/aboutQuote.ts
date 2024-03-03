import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type Image, ImageProjection} from '../../../shared/objects/image';

export type AboutQuote = {
  _type: SANITY_SECTIONS.$HORSE_ABOUT_QUOTE;
  image?: Image;
  quote?: string;
  author?: string;
};

export const AboutQuoteProjection = `
  ...,
  image{${ImageProjection}}
`;
