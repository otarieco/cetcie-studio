import { SANITY_SECTIONS } from '../../../sanity.schemas';
import { type Media, MediaProjection } from '../../../shared/objects/media';

export type HomeHero = {
  _type: SANITY_SECTIONS.$HORSE_HOME_HERO;
  surtitle?: string;
  title?: string;
  media1?: Media;
  media2?: Media;
};

export const HomeHeroProjection = `
  ...,
  media1{${MediaProjection}},
  media2{${MediaProjection}}
`;