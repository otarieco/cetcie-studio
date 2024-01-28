import {defineType} from 'sanity';
import {SANITY_FIELDS, SHOPIFY_DOCUMENTS, SHOPIFY_SECTIONS} from '../../../types/sanity.schemas';
import {CaretCircleDown} from 'phosphor-react';
import {blocksToText} from '../../../utils/blocksToText';

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
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: SANITY_FIELDS.RICHTEXT_PRODUCT,
            },
          ],
          preview: {
            select: {
              label: 'label',
              value: 'value',
            },
            prepare({label, value}: any) {
              return {
                title: label,
                subtitle: blocksToText(value),
                media: <CaretCircleDown />,
              };
            },
          },
        },
      ],
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: SHOPIFY_SECTIONS.PRODUCT_ADVICE},
        {type: SHOPIFY_SECTIONS.PRODUCT_RELATED_PRODUCTS},
        {type: SHOPIFY_SECTIONS.PRODUCT_LARGE_DESCRIPTION},
        {type: SHOPIFY_SECTIONS.PRODUCT_FULL_VIDEO},
      ],
    },
  ],
});
