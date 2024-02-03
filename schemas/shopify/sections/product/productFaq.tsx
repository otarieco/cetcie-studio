import {FileArrowDown, Question} from 'phosphor-react';
import {defineType} from 'sanity';
import {SANITY_DOCUMENTS, SHOPIFY_SECTIONS} from '../../../../types/sanity.schemas';
import {blocksToText} from '../../../../utils/blocksToText';
import HORSE_FAQ from '../../../horse/documents/faq';

export default defineType({
  name: SHOPIFY_SECTIONS.PRODUCT_FAQ,
  title: 'Foire aux questions',
  type: 'object',
  icon: () => <Question width="1em" height="1em" />,
  fields: [
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          name: 'generalQuestion',
          title: 'Question Générale',
          type: 'reference',
          icon: <FileArrowDown />,
          to: [{type: SANITY_DOCUMENTS.$HORSE_FAQ}],
          options: {
            disableNew: true,
          },
        },
        {
          name: 'specificQuestion',
          title: 'Question Spécifique',
          type: 'object',
          icon: <Question />,
          fields: [
            ...HORSE_FAQ.fields.filter((field) => ['question', 'response'].includes(field.name)),
          ],
          preview: {
            select: {
              question: 'question',
              response: 'response',
            },
            prepare(selection: any) {
              const {question, response} = selection;
              return {
                title: question,
                subtitle: blocksToText(response),
                media: <Question />,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      questions: 'questions',
    },
    prepare(selection: any) {
      const {questions} = selection;
      return {
        title: 'Foire aux questions',
        subtitle:
          questions.length > 1 ? `${questions.length} questions` : `${questions.length} question`,
      };
    },
  },
});
