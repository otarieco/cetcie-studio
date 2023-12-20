import {SanityDocument} from 'sanity';
import {SANITY_SINGLETONS} from '../../sanity.schemas';
import {Locale} from '../../shared/locale';
import {Image} from '../../shared/objects/image';
import {RichTextLite} from '../../shared/objects/richTextLite';
import {Link} from '../../shared/objects/link';

export type Footer = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_FOOTER;
  locale?: Locale;
  logo?: Image;
  description?: RichTextLite;
  navigation?: Link[];
};