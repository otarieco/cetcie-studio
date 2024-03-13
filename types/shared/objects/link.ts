import {SANITY_FIELDS} from '../../sanity.schemas';
import {type LinkInternal, LinkProjection as LinkInternalProjection} from './linkInternal';
import {type LinkExternal, LinkProjection as LinkExternalProjection} from './linkExternal';

export type Link = LinkInternal | LinkExternal;

export const LinkProjection = `
  external == true || _type == "${SANITY_FIELDS.LINK_EXTERNAL}" => {
     ${LinkExternalProjection}
  },
  external != true || _type == "${SANITY_FIELDS.LINK_INTERNAL}" => {
     ${LinkInternalProjection}
  }
`;
