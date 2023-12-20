import type {SanityDocument} from 'sanity';
import {SANITY_SINGLETONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import type {Image} from '../../shared/objects/image';
import type {Link} from '../../shared/objects/link';

export type Header = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_HEADER;
  locale?: Locale;
  logoLight?: Image;
  logoDark?: Image;
  navigation?: Link[];
};