import {Camera} from 'phosphor-react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../../types/sanity.schemas';
import {blocksToText} from '../../../../utils/blocksToText';

export default defineType({
  name: SANITY_SECTIONS.$HORSE_BIOGRAPHY_FULL_SCREEN_IMAGE,
  title: 'Grande image',
  type: 'object',
  icon: () => <Camera width="1em" height="1em" />,
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: SANITY_FIELDS.IMAGE,
    },
  ],
  preview: {
    select: {
      title: 'image.alt',
      description: 'image.alt',
    },
    prepare({title, description}) {
      return {
        title,
        subtitle: blocksToText(description),
      };
    },
  },
});
