import type {SanityDocument} from 'sanity';
import {type Link, LinkProjection} from '../../shared/objects/link';

type NavigationGroup = {
  _type: 'group';
  _key: string;
  title?: string;
  links?: Link[];
}

export type Footer = SanityDocument & {
  navigation?: NavigationGroup[];
};

export const FooterProjection = `
  navigation[]{
    ...,
    links[]{
      _key,
      ${LinkProjection}
    }
  },
`;
