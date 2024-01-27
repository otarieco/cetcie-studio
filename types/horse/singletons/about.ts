import type {SanityDocument, Slug} from 'sanity';
import {SANITY_SINGLETONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import {type AboutHero, AboutHeroProjection} from '../sections/about/aboutHero';
import {type Seo, SeoProjection} from '../../shared/objects/seo';
import {
  type AboutIndependent,
  AboutIndependentProjection,
} from '../sections/about/aboutIndependent';
import {
  type AboutCollaborations,
  AboutCollaborationsProjection,
} from '../sections/about/aboutCollaborations';
import {type AboutPortrait, AboutPortraitProjection} from '../sections/about/aboutPortrait';

export type About = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_ABOUT;
  locale?: Locale;
  title?: string;
  slug?: Slug;
  hero?: AboutHero;
  sections?: (AboutIndependent | AboutCollaborations | AboutPortrait)[];
  seo?: Seo;
};

export const AboutProjection = `
  ...,
  hero{${AboutHeroProjection}},
  sections[]{
    ...,
    ${AboutIndependentProjection},
    ${AboutCollaborationsProjection},
    ${AboutPortraitProjection},
  },
  seo{${SeoProjection}},  
`;
