import {BookBookmark} from 'phosphor-react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../../types/sanity.schemas';
import {blocksToText} from '../../../../utils/blocksToText';

export default defineType({
  name: SANITY_SECTIONS.$HORSE_HOME_STORYTELLING,
  title: 'Découvrir notre histoire',
  type: 'object',
  icon: () => <BookBookmark width="1em" height="1em" />,
  fields: [
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
      name: 'link',
      title: 'Lien',
      type: SANITY_FIELDS.LINK_INTERNAL,
    },
  ],
  preview: {
    select: {
      link: 'link',
      description: 'description',
    },
    prepare({link, description}) {
      return {
        title: link?.title,
        subtitle: blocksToText(description),
      };
    },
  },
});
