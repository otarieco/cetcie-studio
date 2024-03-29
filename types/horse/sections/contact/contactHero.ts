import { SANITY_SECTIONS } from '../../../sanity.schemas';
import { type Media, MediaProjection } from '../../../shared/objects/media';

export type ContactHero = {
  _type: SANITY_SECTIONS.$HORSE_CONTACT_HERO;
  surtitle?: string;
  title?: string;
  media?: Media;
};

export const ContactHeroProjection = `
  ...,
  media{${MediaProjection}}
`;