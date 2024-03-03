import {Scroll} from 'phosphor-react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../../types/sanity.schemas';
import {blocksToText} from '../../../../utils/blocksToText';

export default defineType({
  name: SANITY_SECTIONS.$HORSE_BIOGRAPHY_LONG_TEXT,
  title: 'Histoire',
  type: 'object',
  icon: () => <Scroll width="1em" height="1em" />,
  fields: [
    {
      name: 'introduction',
      title: 'Introduction',
      type: SANITY_FIELDS.RICHTEXT_LITE,
    },
    {
      name: 'image',
      title: 'Image',
      type: SANITY_FIELDS.IMAGE,
    },
    {
      name: 'surtitle',
      title: 'Surtitre',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Texte',
      type: SANITY_FIELDS.RICHTEXT_LITE,
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'surtitle',
    },
    prepare({title, description}) {
      return {
        title,
        subtitle: blocksToText(description),
      };
    },
  },
});
