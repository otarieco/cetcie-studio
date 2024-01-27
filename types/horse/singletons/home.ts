import type {SanityDocument} from 'sanity';
import {SANITY_SECTIONS, SANITY_SINGLETONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import {type HomeHero, HomeHeroProjection} from '../sections/home/homeHero';
import {type Seo, SeoProjection} from '../../shared/objects/seo';
import {type HomeEssentials, HomeEssentialsProjection} from '../sections/home/homeEssentials';
import {
  type HomeBrandBenefits,
  HomeBrandBenefitsProjection,
} from '../sections/home/homeBrandBenefits';
import {type HomeMadeInFrance, HomeMadeInFranceProjection} from '../sections/home/homeMadeInFrance';
import {type HomeVisitStore, HomeVisitStoreProjection} from '../sections/home/homeVisitStore';
import {type HomeStorytelling, HomeStorytellingProjection} from '../sections/home/homeStorytelling';

export type Home = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_HOME;
  locale?: Locale;
  title?: string;
  hero?: HomeHero;
  sections?: (
    | HomeEssentials
    | HomeBrandBenefits
    | HomeMadeInFrance
    | HomeVisitStore
    | HomeStorytelling
  )[];
  seo?: Seo;
};

export const HomeProjection = `
  ...,
  hero{${HomeHeroProjection}},
  sections[]{
    _type == "${SANITY_SECTIONS.$HORSE_HOME_ESSENTIALS}" => {
      ${HomeEssentialsProjection},
    },
    _type == "${SANITY_SECTIONS.$HORSE_HOME_BRAND_BENEFITS}" => {
      ${HomeBrandBenefitsProjection},
    },
    _type == "${SANITY_SECTIONS.$HORSE_HOME_MADE_IN_FRANCE}" => {
      ${HomeMadeInFranceProjection},
    },
    _type == "${SANITY_SECTIONS.$HORSE_HOME_VISIT_STORE}" => {
      ${HomeVisitStoreProjection},
    },
    _type == "${SANITY_SECTIONS.$HORSE_HOME_STORYTELLING}" => {
      ${HomeStorytellingProjection},
    },
  },
  seo{${SeoProjection}},  
`;
