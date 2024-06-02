import {FlagBanner} from 'phosphor-react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../types/sanity.schemas';
import { defineSection } from '@tinloof/sanity-studio';
import { blocksToText } from '../../../utils/blocksToText';

export default defineSection({
  name: 'landing.imageEtTexte',
  title: 'Image & texte',
  type: 'object',
  options: {
    variants: [
      {
        assetUrl: 'https://ik.imagekit.io/otariestudio/sanity/cetcie/image+texte.jpg?tr=w-1200',
      },
    ],
  },
  fields: [
    {
      name: 'media',
      title: 'Photo / vidéo',
      type: SANITY_FIELDS.MEDIA,
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
      media: 'media.image',
    },
    prepare: ({content, media}) => ({
      title: content ? blocksToText(content) : 'Image + texte',
      subtitle: content ? 'Image + texte' : 'Aucun texte',
      media: media || (
        <img
          src="https://ik.imagekit.io/otariestudio/sanity/cetcie/image+texte.jpg?tr=w-400"
          loading="lazy"
        />
      ),
    }),
  },
});
