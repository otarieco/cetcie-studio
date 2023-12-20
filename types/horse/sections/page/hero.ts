import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {Media} from '../../../shared/objects/media';

export type Hero = {
  _type: SANITY_SECTIONS.$HORSE_HERO;
  surtitle?: string;
  title?: string;
  media?: Media;
};