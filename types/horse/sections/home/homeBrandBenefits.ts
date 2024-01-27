import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type Image, ImageProjection} from '../../../shared/objects/image';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';

export type HomeBrandBenefits = {
  _type: SANITY_SECTIONS.$HORSE_HOME_BRAND_BENEFITS;
  benefits?: {
    icon?: Image;
    label?: RichTextLite;
  }[];
};

export const HomeBrandBenefitsProjection = `
  ...,
  benefits[]{
    icon{${ImageProjection}}, 
    label{${RichTextLiteProjection}}
  }
`;
