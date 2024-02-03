import type {SanityDocument} from 'sanity';
import {SANITY_DOCUMENTS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';

export type AnimalType = SanityDocument & {
  _type: SANITY_DOCUMENTS.$HORSE_ANIMAL_TYPE;
  locale?: Locale;
  name?: string;
};

export const AnimalTypeProjection = `
  ...
`;
