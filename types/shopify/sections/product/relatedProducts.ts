import {SHOPIFY_SECTIONS} from '../../../sanity.schemas';
import {ProductProjection, type RawProduct} from '../../documents/product/rawProduct';

export type RelatedProducts = {
  _type: SHOPIFY_SECTIONS.PRODUCT_RELATED_PRODUCTS;
  label?: string;
  title?: string;
  products?: RawProduct[];
};

export const RelatedProductsProjection = `
  ...,
  products[]{${ProductProjection}}
`;