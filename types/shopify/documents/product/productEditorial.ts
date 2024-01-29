import {type RichTextProduct, RichTextProductProjection} from '../../../shared/objects/richTextProduct';
import {type Media, MediaProjection} from '../../../shared/objects/media';
import {SHOPIFY_SECTIONS} from '../../../sanity.schemas';
import {type RelatedProducts, RelatedProductsProjection} from '../../sections/product/relatedProducts';
import {type LargeDescription, LargeDescriptionProjection} from '../../sections/product/largeDescription';
import {type FullVideo, FullVideoProjection} from '../../sections/product/fullVideo';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';

/**
 * Custom fields to enhance Shopify product
 */
export type ProductEditorial = {
  title?: string;
  description?: RichTextProduct;
  mediaMain?: Media;
  mediaHover?: Media;
  mediaBanner?: Media;
  metadata?: {
    activeIngredientsAndProperties?: RichTextLite;
    composition?: RichTextLite;
    usageInstructions?: RichTextLite;
  };
  sections?: (RelatedProducts | LargeDescription | FullVideo)[];
};

export const ProductEditorialProjection = `
  ...,
  description[]{${RichTextProductProjection}},
  mediaMain{${MediaProjection}},
  mediaHover{${MediaProjection}},
  mediaBanner{${MediaProjection}},
  metadata{
    activeIngredientsAndProperties[]{${RichTextLiteProjection}},
    composition[]{${RichTextLiteProjection}},
    usageInstructions[]{${RichTextLiteProjection}},
  },
  sections[]{
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
