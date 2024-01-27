import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type Image, ImageProjection} from '../../../shared/objects/image';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';

export type AboutPortrait = {
  _type: SANITY_SECTIONS.$HORSE_ABOUT_PORTRAIT;
  title?: string;
  description?: RichTextLite;
  image?: Image;
  quote?: string;
  author?: string;
};

export const AboutPortraitProjection = `
  ...,
  description{${RichTextLiteProjection}},
  image{${ImageProjection}}
`;
