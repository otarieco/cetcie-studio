import type {SanityDocument} from 'sanity';
import {SANITY_DOCUMENTS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import {type RichTextLite, RichTextLiteProjection} from '../../shared/objects/richTextLite';

export type Faq = SanityDocument & {
  _type: SANITY_DOCUMENTS.$HORSE_FAQ;
  locale?: Locale;
  question?: string;
  response?: RichTextLite;
};

export const FaqProjection = `
   ...,
   response[]{${RichTextLiteProjection}}
`;
