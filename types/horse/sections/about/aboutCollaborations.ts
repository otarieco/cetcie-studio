import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type Image, ImageProjection} from '../../../shared/objects/image';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';

export type AboutCollaborations = {
  _type: SANITY_SECTIONS.$HORSE_ABOUT_COLLABORATIONS;
  title?: string;
  description?: RichTextLite;
  image?: Image;
};

export const AboutCollaborationsProjection = /* groq */ `
  ...,
  description[]{${RichTextLiteProjection}},
  image{${ImageProjection}}
`;
