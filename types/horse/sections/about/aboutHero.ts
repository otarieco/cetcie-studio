import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';

export type AboutHero = {
  _type: SANITY_SECTIONS.$HORSE_ABOUT_HERO;
  title?: string;
  description?: RichTextLite;
  videoLabel?: string;
  video?: string;
};

export const AboutHeroProjection = `
  ...,
  description[]{${RichTextLiteProjection}}
`;
