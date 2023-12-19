import type {SeoMetaDescription} from './seo/seo.metaDescription';
import {defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../sanity.schemas';
import {SeoNoIndex} from './seo/seo.noIndex';
import {SeoMetaTitle} from './seo/seo.metaTitle';
import {SeoKeywords} from './seo/seo.keywords';

export type Seo = {
  _type: SANITY_FIELDS.SEO;
  metaTitle?: SeoMetaTitle;
  metaDescription?: SeoMetaDescription;
  noIndex?: SeoNoIndex;
  keywords?: SeoKeywords;
};

export default defineType({
  name: SANITY_FIELDS.SEO,
  title: 'Seo',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      type: 'seo.metaTitle',
    },
    {
      name: 'metaDescription',
      type: 'seo.metaDescription',
    },
    {
      name: 'noIndex',
      type: 'seo.noIndex',
    },
    {
      name: 'keywords',
      type: 'seo.keywords',
    },
  ],
});