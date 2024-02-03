import {SANITY_FIELDS} from '../../sanity.schemas';
import {type Image, ImageProjection} from './image';
import {type Video, VideoProjection} from './video';

export type Media = {
  _type: SANITY_FIELDS.MEDIA;
  mediaType?: 'image' | 'video';
  image?: Image;
  video?: Video;
};

export const MediaProjection = `
  _type,
  mediaType,
  mediaType == "image" => {
    image{${ImageProjection}}
  }, 
  mediaType == "video" => {
    video{${VideoProjection}}
  },
`;
