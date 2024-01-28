import {SHOPIFY_SECTIONS} from '../../../sanity.schemas';
import {type ProductLink, ProductLinkProjection} from '../../../shared/objects/link/product.link';

export type RelatedProducts = {
  _type: SHOPIFY_SECTIONS.PRODUCT_RELATED_PRODUCTS;
  label?: string;
  title?: string;
  products?: ProductLink[];
};

export const RelatedProductsProjection = `
  ...,
  products[]->{${ProductLinkProjection}}
`;
