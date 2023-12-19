import {defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../sanity.schemas';
import {Figure} from './figure';
import {Link} from './link';

export type NavSection = {
  title?: string;
  image?: Figure;
  links?: Link[];
};

export default defineType({
  name: SANITY_FIELDS.NAV_SECTION,
  title: 'Section',
  type: 'object',
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