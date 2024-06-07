import {FlagBanner} from '@phosphor-icons/react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../../types/sanity.schemas';

export default defineType({
  name: SANITY_SECTIONS.$HORSE_ABOUT_HERO,
  title: 'Hero',
  type: 'object',
  icon: () => <FlagBanner width="1em" height="1em" />,
  fields: [
    {
      name: 'title',
      title: 'Titre principal',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: SANITY_FIELDS.RICHTEXT_LITE,
    },
    {
      name: 'videoLabel',
      title: 'Label vidéo',
      type: 'string',
    },
    {
      name: 'video',
      title: 'Vidéo Youtube',
      type: 'string',
    },
  ],
});
