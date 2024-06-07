import {Article} from '@phosphor-icons/react';
import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../types/sanity.schemas';
import {defineSection} from '@tinloof/sanity-studio';
import { blocksToText } from '../../../utils/blocksToText';

export default defineSection({
  name: 'landing.content',
  title: 'Contenu',
  type: 'object',
  icon: Article,
  fieldsets: [
    {
      name: 'layout',
      title: 'Agencement',
      options: {
        columns: 2
      }
    },
  ],
  options: {
    variants: [
      {
        assetUrl: 'https://ik.imagekit.io/otariestudio/sanity/cetcie/content.jpg?tr=w-1200',
      },
    ],
  },
  fields: [
    {
      name: 'content',
      title: 'Contenu',
      type: SANITY_FIELDS.RICHTEXT_PAGE,
      validation: Rule => Rule.required(),
    },
    {
      name: 'align',
      title: 'Alignement',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          {title: 'Gauche', value: 'left'},
          {title: 'Centré', value: 'center'},
        ],
      },
      fieldset: 'layout',
    },
    {
      name: 'width',
      title: 'Largeur du contenu',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          {title: 'Étroite', value: 'small'},
          {title: 'Large', value: 'large'},
        ],
      },
      fieldset: 'layout',
    },
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({content}) => ({
      title: 'Contenu texte',
      subtitle: blocksToText(content) || 'Aucun contenu',
    }),
  },
});
