import {SanityDocument} from 'sanity';
import {SANITY_SINGLETONS} from '../../sanity.schemas';
import {Locale} from '../../shared/locale';
import {Image} from '../../shared/objects/image';
import {Link} from '../../shared/objects/link';

export type Header = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_HEADER;
  locale?: Locale;
  logoLight?: Image;
  logoDark?: Image;
  navigation?: Link[];
};