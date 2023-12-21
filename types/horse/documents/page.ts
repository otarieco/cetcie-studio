import type { SanityDocument, Slug } from 'sanity';
import { SANITY_DOCUMENTS } from '../../sanity.schemas';
import type { Locale } from '../../shared/locale';
import { type Hero, HeroProjection } from '../sections/page/hero';
import { type Seo, SeoProjection } from '../../shared/objects/seo';

export type Page = SanityDocument & {
  _type: SANITY_DOCUMENTS.$HORSE_PAGE;
  locale?: Locale;
  title?: string;
  slug?: Slug;
  sections?: Hero[];
  seo?: Seo;
};

export const PageProjection = `
  ...,
  sections[]{
    ${HeroProjection},
  },
  seo{${SeoProjection}},
`;