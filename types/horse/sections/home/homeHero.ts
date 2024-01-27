import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type Media, MediaProjection} from '../../../shared/objects/media';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';

export type HomeHero = {
  _type: SANITY_SECTIONS.$HORSE_HOME_HERO;
  surtitle?: string;
  title?: string;
  description?: RichTextLite;
  headline?: string;
  media1?: Media;
  media2?: Media;
};

export const HomeHeroProjection = `
  ...,
  description{${RichTextLiteProjection}},
  media1{${MediaProjection}},
  media2{${MediaProjection}}
`;
