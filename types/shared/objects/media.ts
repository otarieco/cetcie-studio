import {SANITY_FIELDS} from '../../sanity.schemas';
import {MuxAsset} from 'sanity-plugin-mux-input/src/util/types';
import {Image} from './image';

export type Media = {
  _type: SANITY_FIELDS.MEDIA;
  mediaType?: 'image' | 'video';
  image?: Image;
  video?: MuxAsset;
};