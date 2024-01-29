import {defineType} from 'sanity';
import {SANITY_FIELDS, SHOPIFY_DOCUMENTS} from '../../../types/sanity.schemas';

export default defineType({
  name: SHOPIFY_DOCUMENTS.PRODUCT_VARIANT_EDITORIAL,
  title: 'Product Variant Editorial',
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: SANITY_FIELDS.IMAGE}],
    },
  ],
});
