import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';
import {type ProductLink, ProductLinkProjection} from '../../../shared/objects/link/product.link';

export type HomeEssentials = {
  _type: SANITY_SECTIONS.$HORSE_HOME_ESSENTIALS;
  title?: string;
  description?: RichTextLite;
  products?: ProductLink[];
};

export const HomeEssentialsProjection = `
  ...,
  description[]{${RichTextLiteProjection}},
  products[]->{${ProductLinkProjection}}
`;
