import type { SanityDocument } from 'sanity';
import { SANITY_SINGLETONS } from '../../sanity.schemas';
import type { Locale } from '../../shared/locale';
import { type ContactHero, ContactHeroProjection } from '../sections/contact/contactHero';
import { type Seo, SeoProjection } from '../../shared/objects/seo';

export type Contact = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_CONTACT;
  locale?: Locale;
  hero?: ContactHero;
  sections?: any[];
  seo?: Seo;
};

export const ContactProjection = `
  ...,
  hero{${ContactHeroProjection}},
  sections[]{
    ...
  },
  seo{${SeoProjection}},  
`;