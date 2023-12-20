import {defineType, SanityDocument} from 'sanity';
import {Compass} from 'phosphor-react';
import {SANITY_FIELDS, SANITY_SINGLETONS} from '../../../sanity.schemas';
import {Locale} from '../../../i18n.config';
import {Link} from '../../shared/objects/link';
import {Figure} from '../../shared/objects/figure';

export type Header = SanityDocument & {
  _type: SANITY_SINGLETONS.$PETS_HEADER;
  locale?: Locale;
  logoLight?: Figure;
  logoDark?: Figure;
  navigation?: Link[];
};

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
      type: SANITY_FIELDS.FIGURE,
    },
    {
      name: 'logoDark',
      title: 'Logo Dark',
      type: SANITY_FIELDS.FIGURE,
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