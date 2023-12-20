import {SANITY_FIELDS} from '../../sanity.schemas';
import {SanityAssetSource} from '@sanity/asset-utils';

export type Image = {
  _type: SANITY_FIELDS.IMAGE;
  image?: SanityAssetSource;
  alt?: string;
};