import {defineType} from 'sanity';
import {SANITY_FIELDS, SHOPIFY_DOCUMENTS} from '../../../types/sanity.schemas';

export default defineType({
  name: SHOPIFY_DOCUMENTS.COLLECTION_EDITORIAL,
  title: 'Collection Editorial',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'slugProxy',
      title: 'Slug',
      type: 'proxyString',
      options: {field: 'store.slug.current'},
    },
    {
      name: 'description',
      title: 'Description',
      type: SANITY_FIELDS.RICHTEXT_COLLECTION,
    },
    {
      name: 'image',
      title: 'Image',
      type: SANITY_FIELDS.IMAGE,
    },
  ],
});
