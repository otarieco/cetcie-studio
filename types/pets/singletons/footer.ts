import type {SanityDocument} from 'sanity';
import {SANITY_SINGLETONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import type {Image} from '../../shared/objects/image';
import type {RichTextLite} from '../../shared/objects/richTextLite';
import type {Link} from '../../shared/objects/link';

export type Footer = SanityDocument & {
  _type: SANITY_SINGLETONS.$PETS_FOOTER;
  locale?: Locale;
  logo?: Image;
  description?: RichTextLite;
  navigation?: Link[];
};