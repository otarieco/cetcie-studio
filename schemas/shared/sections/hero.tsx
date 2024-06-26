import {FlagBanner} from '@phosphor-icons/react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../types/sanity.schemas';
import { defineSection } from '@tinloof/sanity-studio'
import {blocksToText} from '../../../utils/blocksToText';

export default defineSection({
  name: 'landing.hero',
  title: 'Hero',
  type: 'object',
  icon: FlagBanner,
  options: {
    variants: [
      {
        assetUrl: 'https://ik.imagekit.io/otariestudio/sanity/cetcie/hero.jpg?tr=w-1200',
      },
    ],
  },
  fields: [
    {
      name: 'title',
      title: 'Titre principal',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Intro',
      type: SANITY_FIELDS.RICHTEXT_LITE,
    },
    {
      name: 'media',
      title: 'Photo / vidéo',
      type: SANITY_FIELDS.MEDIA,
    },
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
      media: 'media.image',
    },
    prepare: ({title, media, content}) => ({
      title: 'Hero',
      subtitle: title || blocksToText(content) || 'Aucun texte',
      media: media || (
        <img
          src="https://ik.imagekit.io/otariestudio/sanity/cetcie/hero.jpg?tr=w-400"
          loading="lazy"
        />
      ),
    }),
  },
});
