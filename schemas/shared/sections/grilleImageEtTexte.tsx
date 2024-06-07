import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../types/sanity.schemas';
import { defineSection } from '@tinloof/sanity-studio';
import { blocksToText } from '../../../utils/blocksToText';
import { SquaresFour } from '@phosphor-icons/react';

export default defineSection({
  name: 'landing.grilleImageEtTexte',
  title: 'Grille d’image & texte',
  type: 'object',
  icon: SquaresFour,
  options: {
    variants: [
      {
        assetUrl: 'https://ik.imagekit.io/otariestudio/sanity/cetcie/alternance.jpg?tr=w-1200',
      },
    ],
  },
  fields: [
    {
      name: 'list',
      title: 'Liste',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: SANITY_FIELDS.IMAGE,
            },
            {
              name: 'content',
              title: 'Contenu',
              type: SANITY_FIELDS.RICHTEXT_LITE,
            },
          ],
          preview: {
            select: {
              content: 'content',
              title: 'title',
              media: 'image',
            },
            prepare: ({content, title, media}) => ({
              title: 'Image + texte',
              subtitle: title || blocksToText(content) || 'Aucun texte',
              media: media || (
                <img
                  src="https://ik.imagekit.io/otariestudio/sanity/cetcie/image+texte.jpg?tr=w-400"
                  loading="lazy"
                />
              ),
            }),
          },
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Grille d’Image + texte',
    }),
  },
});
