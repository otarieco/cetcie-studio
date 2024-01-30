import {SANITY_FIELDS} from '../../sanity.schemas';
import type {MuxAsset} from 'sanity-plugin-mux-input/src/util/types';
import {type Image, ImageProjection} from './image';

export type Media = {
  _type: SANITY_FIELDS.MEDIA;
  mediaType?: 'image' | 'video';
  image?: Image;
  video?: MuxAsset;
};

export const VideoProjection = `
  asset{
    playbackId,
  }
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
