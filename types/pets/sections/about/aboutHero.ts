import {SANITY_SECTIONS} from '../../../sanity.schemas';
import type {Media} from '../../../shared/objects/media';

export type AboutHero = {
  _type: SANITY_SECTIONS.$PETS_ABOUT_HERO;
  surtitle?: string;
  title?: string;
  media?: Media;
};