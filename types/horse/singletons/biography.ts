import type {SanityDocument, Slug} from 'sanity';
import {SANITY_SECTIONS, SANITY_SINGLETONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import {type Seo, SeoProjection} from '../../shared/objects/seo';
import {
  BiographyLongTextProjection,
  type BiographyLongText,
} from '../sections/biography/biographyLongText';
import {
  BiographyFullScreenImageProjection,
  type BiographyFullScreenImage,
} from '../sections/biography/biographyFullScreenImage';

export type About = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_ABOUT;
  locale?: Locale;
  title?: string;
  slug?: Slug;
  sections?: (BiographyFullScreenImage | BiographyLongText)[];
  seo?: Seo;
};

export const AboutProjection = `
  ...,
  sections[]{
    _type == "${SANITY_SECTIONS.$HORSE_BIOGRAPHY_FULL_SCREEN_IMAGE}" => {
      ${BiographyFullScreenImageProjection},
    },
     _type == "${SANITY_SECTIONS.$HORSE_BIOGRAPHY_LONG_TEXT}" => {
      ${BiographyLongTextProjection},
    },
  },
  seo{${SeoProjection}}  
`;
