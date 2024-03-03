import type {SanityDocument, Slug} from 'sanity';
import {SANITY_SECTIONS, SANITY_SINGLETONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import {type AboutHero, AboutHeroProjection} from '../sections/about/aboutHero';
import {type Seo, SeoProjection} from '../../shared/objects/seo';
import {
  type AboutIndependent,
  AboutIndependentProjection,
} from '../sections/about/aboutIndependent';
import {type AboutQuote, AboutQuoteProjection} from '../sections/about/aboutQuote';
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
  sections?: (AboutIndependent | AboutCollaborations | AboutPortrait | AboutQuote)[];
  seo?: Seo;
};

export const AboutProjection = `
  ...,
  hero{${AboutHeroProjection}},
  sections[]{
    _type == "${SANITY_SECTIONS.$HORSE_ABOUT_INDEPENDENT}" => {
      ${AboutIndependentProjection},
    },
    _type == "${SANITY_SECTIONS.$HORSE_ABOUT_COLLABORATIONS}" => {
      ${AboutCollaborationsProjection},
    },
    _type == "${SANITY_SECTIONS.$HORSE_ABOUT_PORTRAIT}" => {
      ${AboutPortraitProjection},
    },
    _type == "${SANITY_SECTIONS.$HORSE_ABOUT_QUOTE}" => {
      ${AboutQuoteProjection},
    }
  },
  seo{${SeoProjection}}  
`;
