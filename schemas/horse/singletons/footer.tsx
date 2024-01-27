import {defineType} from 'sanity';
import {SquareHalfBottom} from 'phosphor-react';
import {SANITY_FIELDS, SANITY_SINGLETONS} from '../../../types/sanity.schemas';

export default defineType({
  name: SANITY_SINGLETONS.$HORSE_FOOTER,
  title: 'Footer',
  type: 'document',
  icon: () => <SquareHalfBottom width="1em" height="1em" />,
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
    },
    {
      name: 'navigationMain',
      title: 'Navigation Principale',
      type: 'array',
      of: [
        {
          type: SANITY_FIELDS.NAV_SECTION,
        },
      ],
    },
    {
      name: 'navigationBottom',
      title: 'Navigation Bas',
      type: 'array',
      of: [
        {
          type: SANITY_FIELDS.LINK,
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
