import {defineType} from '@sanity/types';
import {Question} from '@phosphor-icons/react';
import {SANITY_DOCUMENTS, SANITY_FIELDS} from '../../../types/sanity.schemas';
import {blocksToText} from '../../../utils/blocksToText';

export default defineType({
  name: SANITY_DOCUMENTS.$HORSE_FAQ,
  title: 'Foire aux questions',
  type: 'document',
  icon: () => <Question width="1em" height="1em" />,
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
    },
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'response',
      title: 'Réponse',
      type: SANITY_FIELDS.RICHTEXT_LITE,
    },
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
});
