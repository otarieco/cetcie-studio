import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type Media, MediaProjection} from '../../../shared/objects/media';
import {type Link, LinkProjection} from '../../../shared/objects/link';

export type HomeVisitStore = {
  _type: SANITY_SECTIONS.$HORSE_HOME_VISIT_STORE;
  media?: Media;
  link?: Link;
};

export const HomeVisitStoreProjection = `
  ...,
  media{${MediaProjection}},
  link{${LinkProjection}}
`;
