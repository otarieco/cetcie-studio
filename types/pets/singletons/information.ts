import {SanityDocument} from 'sanity';
import {SANITY_SINGLETONS} from '../../sanity.schemas';
import {Locale} from '../../shared/locale';

export type Information = SanityDocument & {
  _type: SANITY_SINGLETONS.$PETS_INFORMATION;
  locale?: Locale;
  company?: string;
  address?: string;
  postalCode?: string;
  city?: string;
  region?: string;
  country?: string;
  email?: string;
  tel?: string;
};