import {defineType} from 'sanity';
import {SquareHalfBottom, SquareHalf, SquareLogo} from 'phosphor-react';
import {SANITY_FIELDS, SANITY_SINGLETONS} from '../../../types/sanity.schemas';

export default defineType({
  name: SANITY_SINGLETONS.$HORSE_FOOTER,
  title: 'Footer',
  type: 'document',
  icon: SquareHalfBottom,
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
    },

    {
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'group',
          title: 'Groupe de liens',
          icon: SquareHalf,
          fields: [
            {
              name: 'title',
              title: 'Titre',
              type: 'string',
            },
            {
              name: 'links',
              title: 'Pages / Liens',
              type: 'array',
              of: [{type: SANITY_FIELDS.LINK_INTERNAL, icon: SquareLogo}, { type: SANITY_FIELDS.LINK_EXTERNAL }],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      };
    },
  },
});
