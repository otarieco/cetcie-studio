import {defineType} from 'sanity';
import {Camera} from 'phosphor-react';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';

export default defineType({
  name: SANITY_FIELDS.MEDIA_EXTRA,
  title: 'Media Extra',
  type: 'object',
  icon: () => <Camera />,
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Taille',
      type: 'string',
      initialValue: 'auto',
      options: {
        list: [
          {title: 'Auto', value: 'auto'},
          {title: 'Large', value: 'large'},
          {title: 'Petit', value: 'small'},
        ],
      },
    },
    {
      name: 'media',
      type: SANITY_FIELDS.MEDIA,
    },
  ],
  preview: {
    select: {
      title: 'title',
      size: 'size',
      media: 'media.image.asset',
    },
    prepare({title, size, media}: any) {
      return {
        title,
        subtitle: size,
        media: media ?? <Camera />,
      };
    },
  },
});
