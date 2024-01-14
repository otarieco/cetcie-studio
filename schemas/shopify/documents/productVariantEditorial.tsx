import {defineType} from 'sanity';
import {SANITY_FIELDS, SHOPIFY_DOCUMENTS} from '../../../types/sanity.schemas';

export default defineType({
  name: SHOPIFY_DOCUMENTS.PRODUCT_VARIANT_EDITORIAL,
  title: 'Product Variant Editorial',
  type: 'object',
  fields: [
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
  ],
});