import {defineType} from '@sanity/types';
import {TagChevron} from 'phosphor-react';
import {SANITY_DOCUMENTS, SANITY_FIELDS} from '../../../types/sanity.schemas';

export default defineType({
  name: SANITY_DOCUMENTS.$HORSE_ANIMAL_TYPE,
  title: "Types d'animaux",
  type: 'document',
  icon: () => <TagChevron width="1em" height="1em" />,
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
