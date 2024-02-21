import defineStructure from '../../utils/defineStructure';
import {SANITY_DOCUMENTS} from '../../types/sanity.schemas';
import type {ListItemBuilder} from 'sanity/lib/exports/desk';

export default defineStructure<ListItemBuilder>((S, context) =>
  S.documentTypeListItem(SANITY_DOCUMENTS.$HORSE_BLOG).title('Articles'),
);
