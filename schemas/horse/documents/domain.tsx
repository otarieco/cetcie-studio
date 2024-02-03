import {defineType} from '@sanity/types';
import {TreeStructure} from 'phosphor-react';
import {SANITY_DOCUMENTS, SANITY_FIELDS} from '../../../types/sanity.schemas';
import {isUniqueAcrossAllDocuments} from '../../../utils/isUniqueAcrossAllDocuments';

export default defineType({
  name: SANITY_DOCUMENTS.$HORSE_DOMAIN,
  title: 'Domaine',
  type: 'document',
  icon: () => <TreeStructure width="1em" height="1em" />,
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueAcrossAllDocuments,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          name: 'category',
          title: 'Catégorie',
          type: 'reference',
          to: [{type: SANITY_DOCUMENTS.$HORSE_CATEGORY}],
          options: {
            disableNew: true,
          },
        },
      ],
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
      };
    },
  },
});
