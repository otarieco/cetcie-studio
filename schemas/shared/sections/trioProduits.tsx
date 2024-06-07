import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../types/sanity.schemas';
import {defineSection} from '@tinloof/sanity-studio';
import {blocksToText} from '../../../utils/blocksToText';
import {SprayBottle} from '@phosphor-icons/react';

export default defineSection({
  name: 'landing.trioProduits',
  title: 'Triptyque de produits',
  type: 'object',
  icon: SprayBottle,
  options: {
    variants: [
      {
        assetUrl: 'https://ik.imagekit.io/otariestudio/sanity/cetcie/trio-produits.jpg?tr=w-1200',
      },
    ],
  },
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      initialValue: 'Les indispensables',
    },
    {
      name: 'produits',
      title: 'Produits',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
          options: {
            disableNew: true,
          },
        },
      ],
      validation: (Rule) => Rule.max(3),
    },
    {
      name: 'light',
      title: 'Fond clair',
      type: 'boolean',
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({
      title: 'Triptyque de produits',
      subtitle: title,
    }),
  },
});
