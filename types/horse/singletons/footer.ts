import type {SanityDocument} from 'sanity';
import {SANITY_FIELDS, SANITY_SINGLETONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import {type Image, ImageProjection} from '../../shared/objects/image';
import type {RichTextLite} from '../../shared/objects/richTextLite';
import {type Link, LinkProjection} from '../../shared/objects/link';
import {type NavSection, NavSectionProjection} from '../../shared/objects/navSection';

export type Footer = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_FOOTER;
  locale?: Locale;
  logo?: Image;
  description?: RichTextLite;
  navigationMain?: NavSection[];
  navigationBottom?: Link[];
};

export const FooterProjection = `
  ...,
  logo{${ImageProjection}},
  navigationMain[]{
    _type == "${SANITY_FIELDS.NAV_SECTION}" => {
      ${NavSectionProjection}
    },
  },
  navigationBottom[]{
    _type == "${SANITY_FIELDS.LINK}" => {
      ${LinkProjection}
    },
  }
`;
