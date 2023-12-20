import {ListItemBuilder} from 'sanity/lib/exports/desk';
import defineStructure from '../../utils/defineStructure';
import {SANITY_DOCUMENTS} from '../../types/sanity.schemas';

export default defineStructure<ListItemBuilder>((S, context) =>
  S.documentTypeListItem(SANITY_DOCUMENTS.$HORSE_BLOG).title('Blogs'),
);