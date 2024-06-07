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
      name: 'image',
      title: 'Image',
      type: SANITY_FIELDS.IMAGE,
    },
    {
      name: 'title',
      title: 'Titre principal',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Contenu',
      type: SANITY_FIELDS.RICHTEXT_LITE,
    },
  ],
  preview: {
    select: {
      content: 'description',
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
});
