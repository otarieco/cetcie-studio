import type {SanityDocument} from 'sanity';
import {SANITY_DOCUMENTS, SANITY_SECTIONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import {type BrandBenefits, BrandBenefitsProjection} from '../sections/page/brandBenefits';

export type ReusableContentDocument = SanityDocument & {
  _type: SANITY_DOCUMENTS.$HORSE_REUSABLE_CONTENT;
  locale?: Locale;
  title?: string;
  sections?: BrandBenefits[];
};

export const ReusableContentDocumentProjection = `
  ...,
  sections[]{
    _type == "${SANITY_SECTIONS.$HORSE_BRAND_BENEFITS}" => {
      ${BrandBenefitsProjection}
    }
  },
`;
