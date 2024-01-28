import {ArrowsClockwise} from 'phosphor-react';
import {defineType} from 'sanity';
import {SANITY_DOCUMENTS, SANITY_SECTIONS} from '../../../../types/sanity.schemas';

export default defineType({
  name: SANITY_SECTIONS.$HORSE_REUSABLE_CONTENT,
  title: 'Contenu Réutilisable',
  type: 'object',
  icon: () => <ArrowsClockwise width="1em" height="1em" />,
  fields: [
    {
      name: 'content',
      title: 'Contenu',
      type: 'reference',
      to: [{type: SANITY_DOCUMENTS.$HORSE_REUSABLE_CONTENT}],
      options: {
        disableNew: true,
      },
    },
  ],
  preview: {
    select: {
      contentTitle: 'content.title',
    },
    prepare({contentTitle}) {
      return {
        title: contentTitle,
      };
    },
  },
});
