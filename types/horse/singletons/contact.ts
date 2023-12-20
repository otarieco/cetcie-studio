import {SanityDocument} from 'sanity';
import {SANITY_SINGLETONS} from '../../sanity.schemas';
import {Locale} from '../../shared/locale';
import {ContactHero} from '../sections/contact/contactHero';
import {Seo} from '../../shared/objects/seo';

export type Contact = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_CONTACT;
  locale?: Locale;
  hero?: ContactHero;
  sections?: any[];
  seo?: Seo;
};