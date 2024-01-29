import {ListPlus} from 'phosphor-react';
import {defineType} from 'sanity';
import {SHOPIFY_DOCUMENTS, SHOPIFY_SECTIONS} from '../../../../types/sanity.schemas';

export default defineType({
  name: SHOPIFY_SECTIONS.PRODUCT_RELATED_PRODUCTS,
  title: 'Produits complémentaires',
  type: 'object',
  icon: () => <ListPlus width="1em" height="1em" />,
  fields: [
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
      products: 'products',
    },
    prepare(selection: any) {
      const {products} = selection;
      return {
        title: 'Produits complémentaires',
        subtitle:
          products.length > 1
            ? `${products.length} produits sélectionnés`
            : `${products.length} produit sélectionné`,
      };
    },
  },
});
