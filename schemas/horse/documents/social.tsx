import {defineType} from '@sanity/types';
import {SanityDocument} from 'sanity';
import {Link} from 'phosphor-react';
import {SANITY_DOCUMENTS, SANITY_FIELDS} from '../../../sanity.schemas';
import {Locale} from '../../../i18n.config';
import {Url} from '../../shared/objects/url';

export type Social = SanityDocument & {
  _type: SANITY_DOCUMENTS.$HORSE_SOCIAL;
  locale?: Locale;
  title?: string;
  url?: Url;
};

export default defineType({
  name: SANITY_DOCUMENTS.$HORSE_SOCIAL,
  title: 'Social',
  type: 'document',
  icon: () => <Link width="1em" height="1em" />,
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
    },
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: SANITY_FIELDS.URL,
    },
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare(selection: any) {
      const {title, url} = selection;
      return {
        title,
        subtitle: url,
        media: <Link />,
      };
    },
  },
});