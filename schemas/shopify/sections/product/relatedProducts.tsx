import {ListPlus} from 'phosphor-react';
import {defineType} from 'sanity';
import {SHOPIFY_DOCUMENTS, SHOPIFY_SECTIONS} from '../../../../types/sanity.schemas';

export default defineType({
  name: SHOPIFY_SECTIONS.PRODUCT_RELATED_PRODUCTS,
  title: 'Produits liés',
  type: 'object',
  icon: () => <ListPlus width="1em" height="1em" />,
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
      name: 'products',
      title: 'Produits',
      type: 'array',
      of: [
        {
          name: 'product',
          title: 'Product',
          type: 'reference',
          to: [{type: SHOPIFY_DOCUMENTS.PRODUCT}],
          options: {
            disableNew: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'title',
    },
    prepare(selection: any) {
      const {title, subtitle} = selection;
      return {
        title,
        subtitle,
      };
    },
  },
});