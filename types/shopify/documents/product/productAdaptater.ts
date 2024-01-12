import {SHOPIFY_DOCUMENTS} from '../../../sanity.schemas';
import type {Slug} from 'sanity';
import type {RawProduct} from './rawProduct';
import type {Product} from './product';

export const productAdaptater = (rawProduct: RawProduct): Product => ({
  _createdAt: rawProduct?._createdAt,
  _updatedAt: rawProduct?._updatedAt,
  _rev: rawProduct?._rev,
  _type: rawProduct?._type as SHOPIFY_DOCUMENTS.PRODUCT,
  _id: rawProduct?._id,
  locale: rawProduct?.locale,
  slug: rawProduct?.store?.slug as Slug,
  title: rawProduct?.editorial?.title,
});