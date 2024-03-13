import {SANITY_FIELDS} from '../../sanity.schemas';
import {type LinkInternal, LinkProjection as LinkInternalProjection} from './linkInternal';
import {type LinkExternal, LinkProjection as LinkExternalProjection} from './linkExternal';

export type Link = LinkInternal | LinkExternal;

export const LinkProjection = `
  _type == "${SANITY_FIELDS.LINK_EXTERNAL}" => {
     ${LinkExternalProjection}
  },
  _type == "${SANITY_FIELDS.LINK_INTERNAL}" => {
     ${LinkInternalProjection}
  }
`;
