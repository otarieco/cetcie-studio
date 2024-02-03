import {SANITY_FIELDS} from '../../sanity.schemas';
import {type Image, ImageProjection} from './image';
import type {VideoAssetDocument} from 'sanity-plugin-mux-input';

export type Media = {
  _type: SANITY_FIELDS.MEDIA;
  mediaType?: 'image' | 'video';
  image?: Image;
  video?: {
    id?: VideoAssetDocument['playbackId'];
  };
};

export const VideoProjection = `
  "id": asset->playbackId
`;

export const MediaProjection = `
  _type,
  mediaType == "image" => {
    image{${ImageProjection}}
  }, 
  mediaType == "video" => {
    video{${VideoProjection}}
  },
`;
