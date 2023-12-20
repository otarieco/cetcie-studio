import {defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';
import {Stack} from 'phosphor-react';

export default defineType({
  name: SANITY_FIELDS.NAV_SECTION,
  title: 'Section',
  type: 'object',
  icon: () => <Stack width="1em" height="1em" />,
  fields: [
    {
      name: 'title',
      title: 'Titre section',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: SANITY_FIELDS.IMAGE,
    },
    {
      name: 'links',
      title: 'Liens',
      type: 'array',
      of: [
        {
          type: SANITY_FIELDS.LINK,
        },
        {
          type: SANITY_FIELDS.NAV_SUB_SECTION,
        },
      ],
    },
  ],
});