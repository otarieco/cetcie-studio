import { type Link, LinkProjection } from './link';

export type NavSubSection = {
  title?: string;
  links?: Link[];
};

export const NavSubSectionProjection = `
  ...,
  links[]{${LinkProjection}},
`;