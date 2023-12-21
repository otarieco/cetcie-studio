import { SANITY_FIELDS } from '../../sanity.schemas';
import type { SeoMetaTitle } from './seo/seo.metaTitle';
import type { SeoMetaDescription } from './seo/seo.metaDescription';
import type { SeoNoIndex } from './seo/seo.noIndex';
import type { SeoKeywords } from './seo/seo.keywords';

export type Seo = {
  _type: SANITY_FIELDS.SEO;
  metaTitle?: SeoMetaTitle;
  metaDescription?: SeoMetaDescription;
  noIndex?: SeoNoIndex;
  keywords?: SeoKeywords;
};

export const SeoProjection = `
  ...,
`;