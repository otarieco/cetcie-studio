import {SanityDocument} from 'sanity';
import {SANITY_SINGLETONS} from '../../sanity.schemas';
import {Locale} from '../../shared/locale';
import {AboutHero} from '../sections/about/aboutHero';
import {Seo} from '../../shared/objects/seo';

export type About = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_ABOUT;
  locale?: Locale;
  hero?: AboutHero;
  sections?: any[];
  seo?: Seo;
};