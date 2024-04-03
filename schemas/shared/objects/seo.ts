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
      validation: (Rule) => Rule.required().min(3).warning('Titre manquant'),
    },
    {
      name: 'description',
      type: 'seo.description',
      validation: (Rule) => Rule.required().min(3).warning('Description manquante'),
    },
    {
      name: 'noindex',
      type: 'seo.noIndex',
    },
    {
      name: 'keywords',
      type: 'seo.keywords',
    },
  ],
  validation: (Rule) => Rule.required().warning('SEO manquant'),
});