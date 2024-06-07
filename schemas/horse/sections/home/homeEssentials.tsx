import {Tag} from '@phosphor-icons/react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SECTIONS, SHOPIFY_DOCUMENTS} from '../../../../types/sanity.schemas';
import {blocksToText} from '../../../../utils/blocksToText';

export default defineType({
  name: SANITY_SECTIONS.$HORSE_HOME_ESSENTIALS,
  title: 'Les indispensables',
  type: 'object',
  icon: Tag,
  fields: [
    {
      name: 'description',
      title: 'Texte introductif',
      type: SANITY_FIELDS.RICHTEXT_LITE,
    },
    {
      name: 'title',
      title: 'Titre principal',
      type: 'string',
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
      validation: (Rule) => Rule.max(3),
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
