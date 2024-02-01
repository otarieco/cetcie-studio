import {SANITY_FIELDS} from '../../sanity.schemas';
import type {SanityAssetSource} from '@sanity/asset-utils';

export type Image = {
  _type: SANITY_FIELDS.IMAGE;
  asset?: SanityAssetSource;
  alt?: string;
} | null;

export const ImageProjection = /* groq */ `
  ...,
  asset->{
    _id,
    metadata{
      palette{muted{background}}
    }
  },
  "ratio": asset->metadata.dimensions.aspectRatio,
`;
