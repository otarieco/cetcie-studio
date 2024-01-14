import type {SanityDocument, Slug} from 'sanity';
import {SANITY_SINGLETONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import {type AboutHero, AboutHeroProjection} from '../sections/about/aboutHero';
import {type Seo, SeoProjection} from '../../shared/objects/seo';

export type About = SanityDocument & {
  _type: SANITY_SINGLETONS.$PETS_ABOUT;
  locale?: Locale;
  title?: string;
  slug?: Slug;
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