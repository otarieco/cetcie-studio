import type {SanityDocument} from 'sanity';
import {SANITY_SINGLETONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import {type RichTextLite, RichTextLiteProjection} from '../../shared/objects/richTextLite';

export type FeatureFlags = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_FEATURE_FLAGS;
  locale?: Locale;
  notificationBar?: {
    enabled?: boolean;
    notification?: RichTextLite;
  };
};

export const FeatureFlagsProjection = `
  ...,
  notificationBar{
    ...,
    notification[]{${RichTextLiteProjection}}
  }
`;
