import type {SanityDocument} from 'sanity';
import {SANITY_DOCUMENTS} from '../../sanity.schemas';
import type {Url} from '../../shared/objects/url';
import type {Locale} from '../../shared/locale';
import {type Image, ImageProjection} from '../../shared/objects/image';

export type Social = SanityDocument & {
  _type: SANITY_DOCUMENTS.$HORSE_SOCIAL;
  locale?: Locale;
  title?: string;
  url?: Url;
  icon?: Image;
};

export const SocialProjection = `
  ...,
  icon{${ImageProjection}}
`;
