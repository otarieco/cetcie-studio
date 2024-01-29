import {defineType} from 'sanity';
import {SANITY_FIELDS, SHOPIFY_DOCUMENTS, SHOPIFY_SECTIONS} from '../../../types/sanity.schemas';

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
      name: 'slugProxy',
      title: 'Slug',
      type: 'proxyString',
      options: {field: 'store.slug.current'},
    },
    {
      name: 'description',
      title: 'Description',
      type: SANITY_FIELDS.RICHTEXT_PRODUCT,
    },
    {
      name: 'mediaMain',
      title: 'Media Principal',
      type: SANITY_FIELDS.MEDIA,
    },
    {
      name: 'mediaHover',
      title: 'Media de survol',
      type: SANITY_FIELDS.MEDIA,
    },
    {
      name: 'mediaBanner',
      title: 'Bannière',
      type: SANITY_FIELDS.MEDIA,
    },
    {
      name: 'metadata',
      title: 'Metadata',
      type: 'object',
      fields: [
        {
          name: 'activeIngredientsAndProperties',
          title: 'Actifs & propriétés',
          type: SANITY_FIELDS.RICHTEXT_LITE,
        },
        {
          name: 'composition',
          title: 'Composition',
          type: SANITY_FIELDS.RICHTEXT_LITE,
        },
        {
          name: 'usageInstructions',
          title: "Conseils d'utilisation",
          type: SANITY_FIELDS.RICHTEXT_LITE,
        },
      ],
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: SHOPIFY_SECTIONS.PRODUCT_RELATED_PRODUCTS},
        {type: SHOPIFY_SECTIONS.PRODUCT_LARGE_DESCRIPTION},
        {type: SHOPIFY_SECTIONS.PRODUCT_FULL_VIDEO},
      ],
    },
  ],
});
