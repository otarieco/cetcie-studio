import { SANITY_SECTIONS } from '../../../sanity.schemas';
import { type Media, MediaProjection } from '../../../shared/objects/media';

export type Hero = {
  _type: SANITY_SECTIONS.$PETS_HERO;
  surtitle?: string;
  title?: string;
  media?: Media;
};

export const HeroProjection = `
  ...,
  media{${MediaProjection}}
`;