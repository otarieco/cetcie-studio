import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../types/sanity.schemas';
import {defineSection} from '@tinloof/sanity-studio';
import {blocksToText} from '../../../utils/blocksToText';
import {SealCheck} from '@phosphor-icons/react';

export default defineSection({
  name: 'landing.grilleBenefices',
  title: 'Grille de bénéfices',
  type: 'object',
  icon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none" viewBox="0 0 38 38">
      <g clip-path="url(#a)">
        <path
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 15H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm12 0h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm12 0h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <rect width="38" height="38" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  ),
  options: {
    variants: [
      {
        assetUrl: 'https://ik.imagekit.io/otariestudio/sanity/cetcie/avantages.jpg?tr=w-1200',
      },
    ],
  },
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'benefices',
      title: 'Bénéfices',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: SealCheck,
          fields: [
            {
              name: 'title',
              title: 'Titre',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description courte',
              type: 'text',
              rows: 2,
            },
            {
              name: 'icon',
              type: 'image',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(6),
    },
  ],
  preview: {
    select: {
      title: 'title',
      benefices: 'benefices',
      media: 'icon',
    },
    prepare: ({title, benefices, media}) => ({
      title: `Grille de${benefices?.length > 0 ? ` ${benefices.length}` : ''} bénéfice${!benefices || benefices.length > 1 ? 's' : ''}`,
      subtitle: benefices?.length > 0 ? title : 'Grille vide',
      media,
    }),
  },
});
