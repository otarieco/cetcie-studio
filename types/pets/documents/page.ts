import {SanityDocument, Slug} from 'sanity';
import {SANITY_DOCUMENTS} from '../../sanity.schemas';
import {Locale} from '../../shared/locale';
import {Hero} from '../sections/page/hero';
import {Seo} from '../../shared/objects/seo';

export type Page = SanityDocument & {
  _type: SANITY_DOCUMENTS.$PETS_PAGE;
  locale?: Locale;
  title?: string;
  slug?: Slug;
  sections?: Hero[];
  seo?: Seo;
};