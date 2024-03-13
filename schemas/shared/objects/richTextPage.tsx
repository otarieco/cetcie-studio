import {defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';
import {TextBolder} from 'phosphor-react';

export default defineType({
  name: SANITY_FIELDS.RICHTEXT_PAGE,
  title: 'RichText Page',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      options: {},
      styles: [
        {title: 'Paragraphe', value: 'normal'},
        {
          title: 'Titre',
          value: 'h2',
          component: ({children}) => (
            <span style={{fontWeight: 700, fontSize: '1.8rem', lineHeight: 1}}>{children}</span>
          ),
        },
        {
          title: 'Sous-titre',
          value: 'h3',
          component: ({children}) => (
            <span style={{fontWeight: 600, fontSize: '1.1rem', opacity: '0.5'}}>{children}</span>
          ),
        },
        {
          title: 'Paragraphe large',
          value: 'large',
          component: ({children}) => (
            <span style={{fontFamily: 'ui-serif, serif', fontSize: '1.3em'}}>{children}</span>
          ),
        },
        {title: 'Encadré', value: 'blockquote'},
        {
          title: 'Manuscrit',
          value: 'handwritten',
          component: ({children}) => (
            <span style={{fontFamily: 'script', fontSize: '2rem'}}>{children}</span>
          ),
        },
      ],
      lists: [
        {title: 'Puce', value: 'bullet'},
        {title: 'Liste', value: 'number'},
      ],

      marks: {
        decorators: [
          {
            title: 'Gras',
            value: 'strong',
            icon: TextBolder,
          },
        ],
        annotations: [],
      },
    },
  ],
});
