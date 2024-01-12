import {defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';

export default defineType({
  name: SANITY_FIELDS.SEO,
  title: 'Seo',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'seo.title',
    },
    {
      name: 'description',
      type: 'seo.description',
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