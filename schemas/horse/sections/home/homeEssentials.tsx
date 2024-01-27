import {Tag} from 'phosphor-react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SECTIONS, SHOPIFY_DOCUMENTS} from '../../../../types/sanity.schemas';
import {blocksToText} from '../../../../utils/blocksToText';

export default defineType({
  name: SANITY_SECTIONS.$HORSE_HOME_ESSENTIALS,
  title: 'Les indispensables',
  type: 'object',
  icon: () => <Tag width="1em" height="1em" />,
  fields: [
    {
      name: 'title',
      title: 'Titre principal',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: SANITY_FIELDS.RICHTEXT_LITE,
    },
    {
      name: 'products',
      title: 'Produits',
      type: 'array',
      of: [
        {
          name: 'product',
          title: 'Produit',
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
      title: 'title',
      description: 'description',
    },
    prepare({title, description}) {
      return {
        title,
        subtitle: blocksToText(description),
      };
    },
  },
});
