import {defineType} from '@sanity/types';
import {Cube} from '@phosphor-icons/react';
import {SANITY_DOCUMENTS, SANITY_FIELDS, SANITY_SECTIONS} from '../../../types/sanity.schemas';

export default defineType({
  name: SANITY_DOCUMENTS.$HORSE_REUSABLE_CONTENT,
  title: 'Contenu réutilisable',
  type: 'document',
  icon: () => <Cube width="1em" height="1em" />,
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
      name: 'sections',
      title: 'Section',
      type: 'array',
      of: [{type: SANITY_SECTIONS.$HORSE_BRAND_BENEFITS}],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection: any) {
      const {title} = selection;
      return {
        title,
      };
    },
  },
});
