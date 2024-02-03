import {SANITY_FIELDS} from '../../sanity.schemas';
import type {SanityImageAsset} from '@sanity/asset-utils';

export type Image = {
  _type: SANITY_FIELDS.IMAGE;
  asset?: SanityImageAsset;
  alt?: string;
  ratio?: SanityImageAsset['metadata']['dimensions']['aspectRatio'];
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
