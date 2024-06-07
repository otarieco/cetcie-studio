import {SANITY_FIELDS, SANITY_SECTIONS, SANITY_DOCUMENTS} from '../../../types/sanity.schemas';
import {defineSection} from '@tinloof/sanity-studio';
import {blocksToText} from '../../../utils/blocksToText';
import {UsersThree} from '@phosphor-icons/react';

export default defineSection({
  name: 'landing.temoignages',
  title: 'Témoignages',
  type: 'object',
  icon: UsersThree,
  options: {
    variants: [
      {
        assetUrl: 'https://ik.imagekit.io/otariestudio/sanity/cetcie/testimonials.jpg?tr=w-1200',
      },
    ],
  },
  fields: [

    {
      name: 'limit',
      title: 'Nombre de témoignages à afficher',
      type: 'number'
    }

    // {
    //   name: 'list',
    //   title: 'Témoignages',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [{type: SANITY_DOCUMENTS.xxx}],
    //       options: {
    //         disableNew: true,
    //       },
    //     },
    //   ],
    //   validation: (Rule) => Rule.max(3),
    // },
  ],
  preview: {
    select: {
      limit: 'limit',
    },
    prepare: ({limit}) => ({
      title: 'Témoignages',
      subtitle: 'Max ' + (limit || 3),
    }),
  },
});
