import {ListItemBuilder} from 'sanity/desk';
import defineStructure from '../../utils/defineStructure';
import {SHOPIFY_DOCUMENTS} from '../../types/sanity.schemas';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Collections')
    .schemaType(SHOPIFY_DOCUMENTS.COLLECTION)
    .child(S.documentTypeList(SHOPIFY_DOCUMENTS.COLLECTION)),
);