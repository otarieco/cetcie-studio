import {SANITY_SECTIONS} from '../../../sanity.schemas';
import type {Media} from '../../../shared/objects/media';

export type ContactHero = {
  _type: SANITY_SECTIONS.$PETS_CONTACT_HERO;
  surtitle?: string;
  title?: string;
  media?: Media;
};