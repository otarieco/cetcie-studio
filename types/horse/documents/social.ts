import type {SanityDocument} from 'sanity';
import {SANITY_DOCUMENTS} from '../../sanity.schemas';
import type {Url} from '../../shared/objects/url';
import type {Locale} from '../../shared/locale';

export type Social = SanityDocument & {
  _type: SANITY_DOCUMENTS.$HORSE_SOCIAL;
  locale?: Locale;
  title?: string;
  url?: Url;
};