import {defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';
import {StackSimple} from 'phosphor-react';

export default defineType({
  name: SANITY_FIELDS.NAV_SUB_SECTION,
  title: 'SubSection',
  type: 'object',
  icon: () => <StackSimple width="1em" height="1em" />,
  fields: [
    {
      name: 'title',
      title: 'Titre section',
      type: 'string',
    },
    {
      name: 'links',
      title: 'Liens',
      type: 'array',
      of: [
        {
          type: SANITY_FIELDS.LINK,
        },
      ],
    },
  ],
});