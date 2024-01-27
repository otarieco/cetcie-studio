import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type Image, ImageProjection} from '../../../shared/objects/image';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';

export type AboutIndependent = {
  _type: SANITY_SECTIONS.$HORSE_ABOUT_INDEPENDENT;
  surtitle?: string;
  title?: string;
  description?: RichTextLite;
  extraDescription?: RichTextLite;
  image?: Image;
};

export const AboutIndependentProjection = `
  ...,
  description[]{${RichTextLiteProjection}},
  extraDescription[]{${RichTextLiteProjection}},
  image{${ImageProjection}}
`;
