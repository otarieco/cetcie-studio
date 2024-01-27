import type {SanityDocument} from 'sanity';
import {SANITY_FIELDS, SANITY_SINGLETONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import {type Image, ImageProjection} from '../../shared/objects/image';
import {type Link, LinkProjection} from '../../shared/objects/link';
import {type NavSection, NavSectionProjection} from '../../shared/objects/navSection';

export type Header = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_HEADER;
  locale?: Locale;
  logoLight?: Image;
  logoDark?: Image;
  navigationLeft?: (Link | NavSection)[];
  navigationRight?: (Link | NavSection)[];
};

export const HeaderProjection = `
  ...,
  logoLight{${ImageProjection}},
  logoDark{${ImageProjection}},
  navigationLeft[]{
    _type == "${SANITY_FIELDS.LINK}" => {
      ${LinkProjection}
    },
    _type == "${SANITY_FIELDS.NAV_SECTION}" => {
      ${NavSectionProjection}
    },
  },
  navigationRight[]{
    _type == "${SANITY_FIELDS.LINK}" => {
      ${LinkProjection}
    },
    _type == "${SANITY_FIELDS.NAV_SECTION}" => {
      ${NavSectionProjection}
    },
  }
`;
