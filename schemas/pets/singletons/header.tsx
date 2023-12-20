import {defineType} from 'sanity';
import {Compass} from 'phosphor-react';
import {SANITY_FIELDS, SANITY_SINGLETONS} from '../../../types/sanity.schemas';

export default defineType({
  name: SANITY_SINGLETONS.$PETS_HEADER,
  title: 'Header',
  type: 'document',
  icon: () => <Compass width="1em" height="1em" />,
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
    },
    {
      name: 'logoLight',
      title: 'Logo Light',
      type: SANITY_FIELDS.IMAGE,
    },
    {
      name: 'logoDark',
      title: 'Logo Dark',
      type: SANITY_FIELDS.IMAGE,
    },
    {
      name: 'navigation',
      title: 'Navigation',
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