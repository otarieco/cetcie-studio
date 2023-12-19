import {defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../sanity.schemas';
import {Figure} from './figure';
import {Link} from './link';
import {StackSimple} from 'phosphor-react';

export type NavSection = {
  title?: string;
  image?: Figure;
  links?: Link[];
};

export default defineType({
  name: SANITY_FIELDS.NAV_SECTION,
  title: 'Section',
  type: 'object',
  icon: () => <StackSimple width="1em" height="1em" />,
  fields: [
    {
      name: 'title',
      title: 'Titre section',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: SANITY_FIELDS.FIGURE,
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