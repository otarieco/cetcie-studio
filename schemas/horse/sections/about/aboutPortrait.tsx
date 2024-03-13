import {UserRectangle} from 'phosphor-react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../../types/sanity.schemas';
import {blocksToText} from '../../../../utils/blocksToText';

export default defineType({
  name: SANITY_SECTIONS.$HORSE_ABOUT_PORTRAIT,
  title: 'Portrait',
  type: 'object',
  icon: () => <UserRectangle width="1em" height="1em" />,
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
    {
      name: 'quote',
      title: 'Citation',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Lien',
      type: SANITY_FIELDS.LINK_INTERNAL,
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
