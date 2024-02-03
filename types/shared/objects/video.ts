import type {VideoAssetDocument} from 'sanity-plugin-mux-input';

export type Video = {
  id?: VideoAssetDocument['playbackId'];
};
export const VideoProjection = `
  "id": asset->playbackId
`;
