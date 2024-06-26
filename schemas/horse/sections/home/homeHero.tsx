import {FlagBanner} from '@phosphor-icons/react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../../types/sanity.schemas';

export default defineType({
  name: SANITY_SECTIONS.$HORSE_HOME_HERO,
  title: 'Hero',
  type: 'object',
  icon: () => <FlagBanner width="1em" height="1em" />,
  fields: [
    {
      name: 'surtitle',
      title: "Titre d'entête",
      type: 'string',
    },
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
      name: 'headline',
      title: 'Gros titre',
      type: 'string',
    },
    {
      name: 'media1',
      title: 'Média 1',
      type: SANITY_FIELDS.MEDIA,
    },
    {
      name: 'media2',
      title: 'Média 2',
      type: SANITY_FIELDS.MEDIA,
    },
  ],
});
