import {defineType, SanityDocument} from 'sanity';
import {Rectangle} from 'phosphor-react';
import {SANITY_FIELDS, SANITY_SINGLETONS} from '../../../sanity.schemas';
import {Link} from '../../shared/objects/link';
import {Locale} from '../../../i18n.config';
import {Figure} from '../../shared/objects/figure';
import {RichTextLite} from '../../shared/objects/richTextLite';

export type Footer = SanityDocument & {
  _type: SANITY_SINGLETONS.$PETS_FOOTER;
  locale?: Locale;
  logo?: Figure;
  description?: RichTextLite;
  navigation?: Link[];
};

export default defineType({
  name: SANITY_SINGLETONS.$PETS_FOOTER,
  title: 'Footer',
  type: 'document',
  icon: () => <Rectangle width="1em" height="1em" />,
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
    },
    {
      name: 'logo',
      title: 'Logo',
      type: SANITY_FIELDS.FIGURE,
    },
    {
      name: 'description',
      title: 'Description',
      type: SANITY_FIELDS.RICHTEXT_LITE,
    },
    {
      name: 'navigation',
      title: 'Navigation Principale',
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