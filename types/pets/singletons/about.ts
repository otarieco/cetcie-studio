import type {SanityDocument} from 'sanity';
import {SANITY_SINGLETONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import type {AboutHero} from '../sections/about/aboutHero';
import type {Seo} from '../../shared/objects/seo';

export type About = SanityDocument & {
  _type: SANITY_SINGLETONS.$PETS_ABOUT;
  locale?: Locale;
  hero?: AboutHero;
  sections?: any[];
  seo?: Seo;
};