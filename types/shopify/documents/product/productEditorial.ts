import {type RichTextRegular, RichTextRegularProjection} from '../../../shared/objects/richTextRegular';
import {type Media, MediaProjection} from '../../../shared/objects/media';
import {SHOPIFY_SECTIONS} from '../../../sanity.schemas';
import {type Advice, AdviceProjection} from '../../sections/product/advice';
import {type RelatedProducts, RelatedProductsProjection} from '../../sections/product/relatedProducts';

/**
 * Custom fields to enhance Shopify product
 */
export type ProductEditorial = {
  title?: string;
  description?: RichTextRegular;
  medias?: Media[];
  tabs?: {
    title?: string;
    content?: RichTextRegular;
  }[];
  sections?: (Advice | RelatedProducts)[];
};

export const ProductEditorialProjection = `
  ...,
  description[]{
  ${RichTextRegularProjection},
  },
  medias[]{${MediaProjection}},
  tabs[]{
    ...,
    ${RichTextRegularProjection},
  },
  sections[]{
    _type == "${SHOPIFY_SECTIONS.PRODUCT_ADVICE}" => {
      ${AdviceProjection}
    },
   _type == "${SHOPIFY_SECTIONS.PRODUCT_RELATED_PRODUCTS}" => {
      ${RelatedProductsProjection}
    },
  }
`;