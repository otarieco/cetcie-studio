import type { SanityDocument } from 'sanity';
import { SANITY_FIELDS, SANITY_SINGLETONS } from '../../sanity.schemas';
import type { Locale } from '../../shared/locale';
import { type Image, ImageProjection } from '../../shared/objects/image';
import { type Link, LinkProjection } from '../../shared/objects/link';
import { NavSectionProjection } from '../../shared/objects/navSection';

export type Header = SanityDocument & {
  _type: SANITY_SINGLETONS.$PETS_HEADER;
  locale?: Locale;
  logoLight?: Image;
  logoDark?: Image;
  navigation?: Link[];
};

export const HeaderProjection = `
  ...,
  logoLight{${ImageProjection}},
  logoDark{${ImageProjection}},
  navigation[]{
    _type == "${SANITY_FIELDS.LINK}" => {
      ${LinkProjection}
    },
    _type == "${SANITY_FIELDS.NAV_SECTION}" => {
      ${NavSectionProjection}
    },
  }
`;