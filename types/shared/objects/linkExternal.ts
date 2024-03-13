import {SANITY_FIELDS} from '../../sanity.schemas';

export type LinkExternal = {
  _type: SANITY_FIELDS.LINK_EXTERNAL;
  _key: string;
  title?: string;
  url?: string;
};

export const LinkProjection = `
  _type,
  _key,
  title,
  url
`;
