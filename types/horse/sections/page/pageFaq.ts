import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type Faq, FaqProjection} from '../../documents/faq';

export type PageFaq = {
  _type: SANITY_SECTIONS.$HORSE_FAQ;
  faqs: {
    title?: string;
    questions: Faq[];
  }[];
};

export const PageFaqProjection = `
  ...,
  faqs[]{
    title,
    questions[]->{${FaqProjection}}
  }
`;
