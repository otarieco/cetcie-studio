import {defineType} from 'sanity';
import {Camera} from '@phosphor-icons/react';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';
import type {Media} from '../../../types/shared/objects/media';

export default defineType({
  name: SANITY_FIELDS.MEDIA,
  title: 'Media',
  type: 'object',
  icon: () => <Camera />,
  fields: [
    {
      name: 'mediaType',
      title: 'Type de média',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Vidéo', value: 'video'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'image',
    },
    {
      name: 'image',
      title: 'Image ',
      type: SANITY_FIELDS.IMAGE,
      options: {
        collapsible: false,
      },
      hidden: ({parent}: {parent: Media}) => !Boolean(parent?.mediaType === 'image'),
    },
    {
      name: 'video',
      title: 'Vidéo',
      type: SANITY_FIELDS.MUX_VIDEO,
      options: {
        collapsible: false,
      },
      hidden: ({parent}: {parent: Media}) => !Boolean(parent?.mediaType === 'video'),
    },
  ],
  preview: {
    select: {
      title: 'image.alt',
      media: 'image.asset',
      mediaType: 'mediaType',
    },
    prepare({title, media, mediaType}: any) {
      return {
        title: mediaType === 'video' ? 'Vidéo' : title || '',
        subtitle: 'Media',
        media: mediaType === 'video' ? <Camera /> : media,
      };
    },
  },
});