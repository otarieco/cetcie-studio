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
  productId: rawProduct?.store?.id,
  title: rawProduct?.editorial?.title,
  description: rawProduct?.editorial?.description,
  priceRange: {
    minVariantPrice: rawProduct?.store?.priceRange?.minVariantPrice,
    maxVariantPrice: rawProduct?.store?.priceRange?.maxVariantPrice,
  },
  medias: rawProduct?.editorial?.medias,
  tabs: rawProduct?.editorial?.tabs,
  sections: rawProduct?.editorial?.sections,
  options: rawProduct?.store?.options?.map((option) => ({
    key: option?._key,
    values: option?.values,
  })),
  variants: rawProduct?.store?.variants?.reduce((acc: ProductVariant[], variant) => {
    if (variant._type === 'productVariant') {
      acc.push({
        variantId: variant?.store?.id,
        title: variant?.store?.title,
        isAvailable: variant?.store?.inventory?.isAvailable,
        compareAtPrice: variant?.store?.compareAtPrice,
        price: variant?.store?.price,
        options: [variant?.store?.option1, variant?.store?.option2, variant?.store?.option3].reduce(
          (acc: ProductVariant['options'], optionValue) => {
            if (optionValue) {
              acc?.push({
                key: rawProduct?.store?.options?.find(
                  (option) => option?.values?.includes(optionValue),
                )?._key,
                value: optionValue,
              });
            }
            return acc;
          },
          [],
        ),
        medias: variant?.editorial?.medias,
      });
    }
    return acc;
  }, []),
  seo: rawProduct?.seo,
});
