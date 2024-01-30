import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {VideoProjection} from '../../../shared/objects/media';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';
import type {MuxAsset} from 'sanity-plugin-mux-input/src/util/types';

export type AboutHero = {
  _type: SANITY_SECTIONS.$HORSE_ABOUT_HERO;
  title?: string;
  description?: RichTextLite;
  videoLabel?: string;
  video?: MuxAsset;
};

export const AboutHeroProjection = `
  ...,
  description[]{${RichTextLiteProjection}},
  video{${VideoProjection}}
`;
