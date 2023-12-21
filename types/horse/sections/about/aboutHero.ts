import { SANITY_SECTIONS } from '../../../sanity.schemas';
import { type Media, MediaProjection } from '../../../shared/objects/media';

export type AboutHero = {
  _type: SANITY_SECTIONS.$HORSE_ABOUT_HERO;
  surtitle?: string;
  title?: string;
  media?: Media;
};

export const AboutHeroProjection = `
  ...,
  media{${MediaProjection}}
`;