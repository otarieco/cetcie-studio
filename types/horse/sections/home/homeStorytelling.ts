import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type Image, ImageProjection} from '../../../shared/objects/image';
import {type Link, LinkProjection} from '../../../shared/objects/link';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';

export type HomeStorytelling = {
  _type: SANITY_SECTIONS.$HORSE_HOME_MADE_IN_FRANCE;
  description?: RichTextLite;
  image?: Image;
  link?: Link;
};

export const HomeStorytellingProjection = `
  ...,
  description{${RichTextLiteProjection}},
  image{${ImageProjection}},
  link{${LinkProjection}}
`;
