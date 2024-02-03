import {SHOPIFY_SECTIONS} from '../../../sanity.schemas';
import {type Faq, FaqProjection} from '../../../horse/documents/faq';

export type ProductFaq = {
  _type: SHOPIFY_SECTIONS.PRODUCT_FAQ;
  questions?: {
    _type?: 'generalQuestion' | 'specificQuestion';
    question: Faq['question'];
    response: Faq['response'];
  }[];
};

export const ProductFaqProjection = `
   _type,
   questions[]{
    _type == "generalQuestion" => @->{
      ${FaqProjection}
    },
    _type == "specificQuestion" => @{
      ${FaqProjection}
    },
   } 
`;
