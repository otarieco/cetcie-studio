import type { SanityDocument } from 'sanity';
import { SANITY_FIELDS, SANITY_SINGLETONS } from '../../sanity.schemas';
import type { Locale } from '../../shared/locale';
import { type Image, ImageProjection } from '../../shared/objects/image';
import type { RichTextLite } from '../../shared/objects/richTextLite';
import { type Link, LinkProjection } from '../../shared/objects/link';

export type Footer = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_FOOTER;
  locale?: Locale;
  logo?: Image;
  description?: RichTextLite;
  navigation?: Link[];
};

export const FooterProjection = `
  ...,
  logo{${ImageProjection}},
  navigation[]{
    _type == "${SANITY_FIELDS.LINK}" => {
      ${LinkProjection}
    },
  }
`;