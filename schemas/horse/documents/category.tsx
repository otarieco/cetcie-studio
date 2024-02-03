import {defineType} from '@sanity/types';
import {TreeStructure} from 'phosphor-react';
import {SANITY_DOCUMENTS, SANITY_FIELDS, SHOPIFY_DOCUMENTS} from '../../../types/sanity.schemas';
import {isUniqueAcrossAllDocuments} from '../../../utils/isUniqueAcrossAllDocuments';

export default defineType({
  name: SANITY_DOCUMENTS.$HORSE_CATEGORY,
  title: 'Catégorie',
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
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [
        {
          name: 'collection',
          title: 'Collections',
          type: 'reference',
          to: [{type: SHOPIFY_DOCUMENTS.COLLECTION}],
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
