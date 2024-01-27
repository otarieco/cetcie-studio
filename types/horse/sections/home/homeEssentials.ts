import {SANITY_SECTIONS} from '../../../sanity.schemas';
import type {Product} from '../../../shopify/documents/product/product';
import {ProductProjection} from '../../../shopify/documents/product/rawProduct';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';

export type HomeEssentials = {
  _type: SANITY_SECTIONS.$HORSE_HOME_ESSENTIALS;
  title?: string;
  description?: RichTextLite;
  products?: Product[];
};

export const HomeEssentialsProjection = `
  ...,
  description{${RichTextLiteProjection}},
  products[]{${ProductProjection}}
`;
