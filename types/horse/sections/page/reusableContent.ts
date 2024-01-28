import {SANITY_SECTIONS} from '../../../sanity.schemas';
import {
  type ReusableContentDocument,
  ReusableContentDocumentProjection,
} from '../../documents/reusableContent';

export type ReusableContentSection = {
  _type: SANITY_SECTIONS.$HORSE_REUSABLE_CONTENT;
  title?: string;
  content?: ReusableContentDocument;
};

export const ReusableContentSectionProjection = `
  ...,
  content->{${ReusableContentDocumentProjection}}
`;
