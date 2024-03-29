import type { SanityDocument } from 'sanity';
import { SANITY_SINGLETONS } from '../../sanity.schemas';
import type { Locale } from '../../shared/locale';

export type Information = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_INFORMATION;
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

export const InformationProjection = `
  ...
`;