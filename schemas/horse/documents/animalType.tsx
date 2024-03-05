import {defineType} from '@sanity/types';
import {Horse} from 'phosphor-react';
import {SANITY_DOCUMENTS, SANITY_FIELDS} from '../../../types/sanity.schemas';
import {isUniqueAcrossAllDocuments} from '../../../utils/isUniqueAcrossAllDocuments';

export default defineType({
  name: SANITY_DOCUMENTS.$HORSE_ANIMAL_TYPE,
  title: "Type d'animal",
  type: 'document',
  icon: Horse,
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
    },
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: isUniqueAcrossAllDocuments,
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare(selection: any) {
      const {name} = selection;
      return {
        title: name,
      };
    },
  },
});
