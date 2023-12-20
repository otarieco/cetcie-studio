import {FlagBanner} from 'phosphor-react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../../types/sanity.schemas';

export default defineType({
  name: SANITY_SECTIONS.$HORSE_ABOUT_HERO,
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
      name: 'media',
      title: 'Média',
      type: SANITY_FIELDS.MEDIA,
    },
  ],
});