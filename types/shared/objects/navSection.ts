import { type Link, LinkProjection } from './link';
import { type Image, ImageProjection } from './image';
import { type NavSubSection, NavSubSectionProjection } from './navSubSection';
import { SANITY_FIELDS } from '../../sanity.schemas';

export type NavSection = {
  _type: SANITY_FIELDS.LINK;
  title?: string;
  image?: Image;
  links?: (Link | NavSubSection)[];
};

export const NavSectionProjection = `
  ...,
  image{${ImageProjection}},
  links[]{
    _type == "${SANITY_FIELDS.LINK}" => {
      ${LinkProjection}
    },
    _type == "${SANITY_FIELDS.NAV_SUB_SECTION}" => {
      ${NavSubSectionProjection}
    },
  },
`;