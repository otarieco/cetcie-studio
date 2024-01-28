import {type RichTextProduct, RichTextProductProjection} from '../../../shared/objects/richTextProduct';
import {type Media, MediaProjection} from '../../../shared/objects/media';
import {SHOPIFY_SECTIONS} from '../../../sanity.schemas';
import {type Advice, AdviceProjection} from '../../sections/product/advice';
import {type RelatedProducts, RelatedProductsProjection} from '../../sections/product/relatedProducts';
import {type LargeDescription, LargeDescriptionProjection} from '../../sections/product/largeDescription';
import {type FullVideo, FullVideoProjection} from '../../sections/product/fullVideo';

/**
 * Custom fields to enhance Shopify product
 */
export type ProductEditorial = {
  title?: string;
  description?: RichTextProduct;
  medias?: Media[];
  tabs?: {
    label?: string;
    value?: RichTextProduct;
  }[];
  sections?: (Advice | RelatedProducts | LargeDescription | FullVideo)[];
};

export const ProductEditorialProjection = `
  ...,
  description[]{${RichTextProductProjection}},
  medias[]{${MediaProjection}},
  tabs[]{
    label,
    value[]{${RichTextProductProjection}},
  },
  sections[]{
    _type == "${SHOPIFY_SECTIONS.PRODUCT_ADVICE}" => {
      ${AdviceProjection}
    },
    _type == "${SHOPIFY_SECTIONS.PRODUCT_RELATED_PRODUCTS}" => {
      ${RelatedProductsProjection}
    },
    _type == "${SHOPIFY_SECTIONS.PRODUCT_LARGE_DESCRIPTION}" => {
      ${LargeDescriptionProjection}
    },
    _type == "${SHOPIFY_SECTIONS.PRODUCT_FULL_VIDEO}" => {
      ${FullVideoProjection}
    },
  }
`;
