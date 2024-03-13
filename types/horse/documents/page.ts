import type {SanityDocument, Slug} from 'sanity';
import {SANITY_DOCUMENTS, SANITY_SECTIONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import {type Hero, HeroProjection} from '../sections/page/hero';
import {type Seo, SeoProjection} from '../../shared/objects/seo';
import {
  type ReusableContentSection,
  ReusableContentSectionProjection,
} from '../sections/page/reusableContent';
import {type PageFaq, PageFaqProjection} from '../sections/page/pageFaq';
import { type RichTextPage } from '../../shared/objects/richTextPage';

export type Page = SanityDocument & {
  _type: SANITY_DOCUMENTS.$HORSE_PAGE;
  locale?: Locale;
  title?: string;
  slug?: Slug;
  content?: RichTextPage;
  sections?: (Hero | PageFaq | ReusableContentSection)[];
  seo?: Seo;
};

export const PageProjection = `
  ...,
  content[],
  sections[]{
    _type == "${SANITY_SECTIONS.$HORSE_HERO}" => {
      ${HeroProjection}
    },
    _type == "${SANITY_SECTIONS.$HORSE_FAQ}" => {
      ${PageFaqProjection}
    },
    _type == "${SANITY_SECTIONS.$HORSE_REUSABLE_CONTENT}" => {
      ${ReusableContentSectionProjection},
    }
  },
  seo{${SeoProjection}}
`;
