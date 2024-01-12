import type { SanityDocument } from 'sanity';
import { SANITY_SINGLETONS } from '../../sanity.schemas';
import type { Locale } from '../../shared/locale';
import { type AboutHero, AboutHeroProjection } from '../sections/about/aboutHero';
import { type Seo, SeoProjection } from '../../shared/objects/seo';

export type About = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_ABOUT;
  locale?: Locale;
  hero?: AboutHero;
  sections?: any[];
  seo?: Seo;
};

export const AboutProjection = `
  ...,
  hero{${AboutHeroProjection}},
  sections[]{
    ...
  },
  seo{${SeoProjection}},  
`;