import {Question, Stack} from '@phosphor-icons/react';
import {defineType} from 'sanity';
import {SANITY_DOCUMENTS, SANITY_SECTIONS} from '../../../../types/sanity.schemas';

export default defineType({
  name: SANITY_SECTIONS.$HORSE_FAQ,
  title: 'Foire aux questions',
  type: 'object',
  icon: () => <Question width="1em" height="1em" />,
  fields: [
    {
      name: 'faqs',
      title: 'Faqs',
      type: 'array',
      of: [
        {
          name: 'faq',
          title: 'Faq',
          type: 'object',
          icon: <Stack />,
          fields: [
            {
              name: 'title',
              title: 'Titre',
              type: 'string',
            },
            {
              name: 'questions',
              title: 'Questions',
              type: 'array',
              of: [
                {
                  name: 'question',
                  title: 'Question',
                  type: 'reference',
                  to: [{type: SANITY_DOCUMENTS.$HORSE_FAQ}],
                  options: {
                    disableNew: true,
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
              questions: 'questions',
            },
            prepare({title, questions}) {
              return {
                title,
                subtitle:
                  questions.length > 1
                    ? `${questions.length} questions`
                    : `${questions.length} question`,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      faqs: 'faqs',
    },
    prepare({faqs}) {
      return {
        title: 'Foire aux questions',
        subtitle: faqs?.length ? faqs.map((faq: any) => faq.title).join(' | ') : 'Aucun contenu',
      };
    },
  },
});
