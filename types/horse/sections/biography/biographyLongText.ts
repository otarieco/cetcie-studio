import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type Image, ImageProjection} from '../../../shared/objects/image';
import {RichTextLiteProjection, type RichTextLite} from '../../../shared/objects/richTextLite';

export type BiographyLongText = {
  _type: SANITY_SECTIONS.$HORSE_BIOGRAPHY_LONG_TEXT;
  introduction?: RichTextLite;
  image?: Image;
  text?: RichTextLite;
};

export const BiographyLongTextProjection = `
  ...,
  introduction[]{${RichTextLiteProjection}},
  image{${ImageProjection}},
  text[]{${RichTextLiteProjection}},
`;
