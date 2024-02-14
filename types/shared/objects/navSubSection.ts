import { type Link, LinkProjection } from './link';
import { SANITY_FIELDS } from '../../sanity.schemas';

export type NavSubSection = {
  _type: SANITY_FIELDS.NAV_SUB_SECTION;
  title?: string;
  links?: Link[];
};

export const NavSubSectionProjection = `
  ...,
  links[]{${LinkProjection}},
`;