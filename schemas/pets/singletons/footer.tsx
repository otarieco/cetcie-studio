import {defineType} from 'sanity';
import {SquareHalfBottom} from 'phosphor-react';
import {SANITY_FIELDS, SANITY_SINGLETONS} from '../../../types/sanity.schemas';

export default defineType({
  name: SANITY_SINGLETONS.$PETS_FOOTER,
  title: 'Footer',
  type: 'document',
  icon: () => <SquareHalfBottom width="1em" height="1em" />,
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
    },
    {
      name: 'logo',
      title: 'Logo',
      type: SANITY_FIELDS.IMAGE,
    },
    {
      name: 'description',
      title: 'Description',
      type: SANITY_FIELDS.RICHTEXT_LITE,
    },
    {
      name: 'navigation',
      title: 'Navigation',
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
