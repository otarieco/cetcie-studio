import {defineType} from 'sanity';
import {SANITY_FIELDS, SHOPIFY_DOCUMENTS} from '../../../types/sanity.schemas';

export default defineType({
  name: SHOPIFY_DOCUMENTS.PRODUCT_EDITORIAL,
  title: 'Product Editorial',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: SANITY_FIELDS.RICHTEXT_REGULAR,
    },
    {
      name: 'medias',
      title: 'Medias',
      type: 'array',
      of: [
        {
          name: 'media',
          title: 'Media',
          type: SANITY_FIELDS.MEDIA,
        },
      ],
    },
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        {
          name: 'tab',
          title: 'Tab',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Contenu',
              type: SANITY_FIELDS.RICHTEXT_REGULAR,
            },
          ],
        },
      ],
    },
    {
      name: 'advice',
      title: "Conseils d'utilisation",
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
        },
        {
          name: 'title',
          title: 'Titre',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'media',
          title: 'Media',
          type: SANITY_FIELDS.MEDIA,
        },
      ],
    },
  ],
});