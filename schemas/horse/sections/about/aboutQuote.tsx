import {UserRectangle} from 'phosphor-react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../../types/sanity.schemas';
import {blocksToText} from '../../../../utils/blocksToText';

export default defineType({
  name: SANITY_SECTIONS.$HORSE_ABOUT_QUOTE,
  title: 'Citation',
  type: 'object',
  icon: () => <UserRectangle width="1em" height="1em" />,
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: SANITY_FIELDS.IMAGE,
    },
    {
      name: 'quote',
      title: 'Citation',
      type: 'text',
    },
    {
      name: 'author',
      title: 'Auteur',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'author',
      description: 'quote',
    },
    prepare({title, description}) {
      return {
        title,
        subtitle: blocksToText(description),
      };
    },
  },
});
