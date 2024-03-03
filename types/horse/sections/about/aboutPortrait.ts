import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type Image, ImageProjection} from '../../../shared/objects/image';
import {LinkProjection, type Link} from '../../../shared/objects/link';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';

export type AboutPortrait = {
  _type: SANITY_SECTIONS.$HORSE_ABOUT_PORTRAIT;
  title?: string;
  description?: RichTextLite;
  image?: Image;
  quote?: string;
  link?: Link;
};

export const AboutPortraitProjection = `
  ...,
  description[]{${RichTextLiteProjection}},
  image{${ImageProjection}},
  link{${LinkProjection}}
`;
