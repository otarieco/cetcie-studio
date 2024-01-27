import {Hexagon} from 'phosphor-react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../../types/sanity.schemas';
import {blocksToText} from '../../../../utils/blocksToText';

export default defineType({
  name: SANITY_SECTIONS.$HORSE_HOME_MADE_IN_FRANCE,
  title: 'Made in France',
  type: 'object',
  icon: () => <Hexagon width="1em" height="1em" />,
  fields: [
    {
      name: 'title',
      title: 'Titre principal',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: SANITY_FIELDS.RICHTEXT_LITE,
    },
    {
      name: 'image',
      title: 'Image',
      type: SANITY_FIELDS.IMAGE,
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({title, description}) {
      return {
        title,
        subtitle: blocksToText(description),
      };
    },
  },
});
