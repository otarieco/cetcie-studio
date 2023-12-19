import {Image} from 'phosphor-react';
import {SanityAssetSource} from '@sanity/asset-utils';
import {SANITY_FIELDS} from '../../../sanity.schemas';
import {defineType} from 'sanity';

export type Figure = {
  _type: SANITY_FIELDS.FIGURE;
  image?: SanityAssetSource;
  alt?: string;
};

export default defineType({
  name: SANITY_FIELDS.FIGURE,
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