import defineStructure from '../../utils/defineStructure';
import {SANITY_DOCUMENTS} from '../../types/sanity.schemas';
import {Files, Stack} from '@phosphor-icons/react';

export default defineStructure((S, context) =>
  S.documentTypeListItem(SANITY_DOCUMENTS.$HORSE_PAGE).title('Pages').icon(Stack),
);
