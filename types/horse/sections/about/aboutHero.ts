import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';
import {type Video, VideoProjection} from '../../../shared/objects/video';

export type AboutHero = {
  _type: SANITY_SECTIONS.$HORSE_ABOUT_HERO;
  title?: string;
  description?: RichTextLite;
  videoLabel?: string;
  video?: Video;
};

export const AboutHeroProjection = `
  ...,
  description[]{${RichTextLiteProjection}},
  video{${VideoProjection}}
`;
