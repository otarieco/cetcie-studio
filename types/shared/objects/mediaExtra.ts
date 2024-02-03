import {SANITY_FIELDS} from '../../sanity.schemas';
import {MediaProjection} from './media';

export type MediaExtra = {
  _type: SANITY_FIELDS.MEDIA_EXTRA;
  title?: string;
  size?: 'auto' | 'large' | 'small';
};

export const MediaExtraProjection = `
    ...,
    media{${MediaProjection}}
`;
