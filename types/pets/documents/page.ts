import type {SanityDocument, Slug} from 'sanity';
import {SANITY_DOCUMENTS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import type {Hero} from '../sections/page/hero';
import type {Seo} from '../../shared/objects/seo';

export type Page = SanityDocument & {
  _type: SANITY_DOCUMENTS.$PETS_PAGE;
  locale?: Locale;
  title?: string;
  slug?: Slug;
  sections?: Hero[];
  seo?: Seo;
};