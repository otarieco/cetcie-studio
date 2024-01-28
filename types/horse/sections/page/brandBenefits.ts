import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {type Image, ImageProjection} from '../../../shared/objects/image';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';

export type BrandBenefits = {
  _type: SANITY_SECTIONS.$HORSE_BRAND_BENEFITS;
  benefits?: {
    icon?: Image;
    label?: RichTextLite;
  }[];
};

export const BrandBenefitsProjection = `
  ...,
  benefits[]{
    icon{${ImageProjection}}, 
    label[]{${RichTextLiteProjection}}
  }
`;
