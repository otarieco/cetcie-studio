import {defineType} from 'sanity';
import {PawPrint} from 'phosphor-react';
import {SANITY_FIELDS, SANITY_SINGLETONS} from '../../../types/sanity.schemas';

export default defineType({
  name: SANITY_SINGLETONS.$HORSE_HEADER,
  title: 'Header',
  type: 'document',
  icon: PawPrint,
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
    },

    {
      name: 'navigationLeft',
      title: 'Navigation Gauche',
      type: 'array',
      of: [
        {
          type: SANITY_FIELDS.LINK,
        },
        {
          type: SANITY_FIELDS.NAV_SECTION,
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Header',
      };
    },
  },
});
