import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {Media} from '../../../shared/objects/media';

export type AboutHero = {
  _type: SANITY_SECTIONS.$HORSE_ABOUT_HERO;
  surtitle?: string;
  title?: string;
  media?: Media;
};