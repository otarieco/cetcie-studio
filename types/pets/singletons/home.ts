import type {SanityDocument} from 'sanity';
import {SANITY_SINGLETONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import {type HomeHero, HomeHeroProjection} from '../sections/home/homeHero';
import {type Seo, SeoProjection} from '../../shared/objects/seo';

export type Home = SanityDocument & {
  _type: SANITY_SINGLETONS.$PETS_HOME;
  locale?: Locale;
  title?: string;
  hero?: HomeHero;
  sections?: any[];
  seo?: Seo;
};

export const HomeProjection = `
  ...,
  hero{${HomeHeroProjection}},
  sections[]{
    ...
  },
  seo{${SeoProjection}},  
`;