import {SHOPIFY_DOCUMENTS} from '../../../sanity.schemas';
import type {Slug} from 'sanity';
import type {RawProduct} from './rawProduct';
import type {Product, ProductVariant} from './product';

export const productAdapter = (rawProduct: RawProduct): Product => ({
  _createdAt: rawProduct?._createdAt,
  _updatedAt: rawProduct?._updatedAt,
  _rev: rawProduct?._rev,
  _type: rawProduct?._type as SHOPIFY_DOCUMENTS.PRODUCT,
  _id: rawProduct?._id,
  locale: rawProduct?.locale,
  slug: rawProduct?.store?.slug as Slug,
  title: rawProduct?.editorial?.title,
  description: rawProduct?.editorial?.description,
  medias: rawProduct?.editorial?.medias,
  tabs: rawProduct?.editorial?.tabs,
  sections: rawProduct?.editorial?.sections,
  variants: rawProduct?.store?.variants?.reduce((acc: ProductVariant[], variant) => {
    if (variant._type === 'productVariant') {
      acc.push({
        productId: variant?.store?.productId,
        variantId: variant?.store?.id,
        isAvailable: variant?.store?.inventory?.isAvailable,
        price: variant?.store?.price,
      });
    }
    return acc;
  }, []),
  seo: rawProduct?.seo,
});