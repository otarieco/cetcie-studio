import {Image} from '@phosphor-icons/react';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';
import {defineType} from 'sanity';

export default defineType({
  name: SANITY_FIELDS.IMAGE,
  title: 'Image',
  type: 'image',
  icon: Image,
  options: {
    hotspot: true,
    collapsible: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alt',
      type: 'string',
      description: 'Description de l’image pour le SEO',
    },
  ],
  preview: {
    select: {
      media: 'asset',
      title: 'asset.originalFilename',
      caption: 'caption',
      alt: 'alt',
    },
    prepare({title, caption, media, alt}: any) {
      return {
        title: caption ?? title,
        subtitle: alt,
        media,
      };
    },
  },
});