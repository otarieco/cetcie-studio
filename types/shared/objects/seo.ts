import {SANITY_FIELDS} from '../../sanity.schemas';
import type {SeoTitle} from './seo/seo.title';
import type {SeoDescription} from './seo/seo.description';
import type {SeoNoIndex} from './seo/seo.noIndex';
import type {SeoKeywords} from './seo/seo.keywords';

export type Seo = {
  _type: SANITY_FIELDS.SEO;
  title?: SeoTitle;
  description?: SeoDescription;
  noIndex?: SeoNoIndex;
  keywords?: SeoKeywords;
};

export const SeoProjection = `
  ...,
`;