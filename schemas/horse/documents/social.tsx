import {defineType} from '@sanity/types';
import {Link} from 'phosphor-react';
import {SANITY_DOCUMENTS, SANITY_FIELDS} from '../../../types/sanity.schemas';

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