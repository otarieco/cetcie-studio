import {SanityDocument} from 'sanity';
import {SANITY_SINGLETONS} from '../../sanity.schemas';
import {Locale} from '../../shared/locale';
import {HomeHero} from '../sections/home/homeHero';
import {Seo} from '../../shared/objects/seo';

export type Home = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_HOME;
  locale?: Locale;
  hero?: HomeHero;
  sections?: any[];
  seo?: Seo;
};