import {SANITY_FIELDS} from '../../sanity.schemas';
import {SeoMetaTitle} from './seo/seo.metaTitle';
import {SeoMetaDescription} from './seo/seo.metaDescription';
import {SeoNoIndex} from './seo/seo.noIndex';
import {SeoKeywords} from './seo/seo.keywords';

export type Seo = {
  _type: SANITY_FIELDS.SEO;
  metaTitle?: SeoMetaTitle;
  metaDescription?: SeoMetaDescription;
  noIndex?: SeoNoIndex;
  keywords?: SeoKeywords;
};