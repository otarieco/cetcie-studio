import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type Image, ImageProjection} from '../../../shared/objects/image';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';

export type HomeMadeInFrance = {
  _type: SANITY_SECTIONS.$HORSE_HOME_MADE_IN_FRANCE;
  title?: string;
  description?: RichTextLite;
  image?: Image;
};

export const HomeMadeInFranceProjection = `
  ...,
  description{${RichTextLiteProjection}},
  image{${ImageProjection}}
`;
