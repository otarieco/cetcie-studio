import type {SanityDocument} from 'sanity';
import {SANITY_SINGLETONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import type {ContactHero} from '../sections/contact/contactHero';
import type {Seo} from '../../shared/objects/seo';

export type Contact = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_CONTACT;
  locale?: Locale;
  hero?: ContactHero;
  sections?: any[];
  seo?: Seo;
};