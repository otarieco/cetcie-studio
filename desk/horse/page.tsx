import defineStructure from '../../utils/defineStructure';
import {SANITY_DOCUMENTS, SANITY_SINGLETONS} from '../../types/sanity.schemas';
import {Files, Stack} from 'phosphor-react';
import type {ListItemBuilder} from 'sanity/lib/exports/desk';

export default defineStructure<ListItemBuilder>((S, context) =>
  S.listItem()
    .title('Pages')
    .icon(Files)
    .child(
      S.list()
        .title('Pages')
        .items([
          // ABOUT PAGE SINGLETON
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_ABOUT)
            .id(SANITY_SINGLETONS.$HORSE_ABOUT),

          // CONTACT PAGE SINGLETON
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_CONTACT)
            .id(SANITY_SINGLETONS.$HORSE_CONTACT),

          // DIVIDER
          S.divider(),

          // PAGE DOCUMENTS
          S.documentTypeListItem(SANITY_DOCUMENTS.$HORSE_PAGE)
            .title('Pages génériques')
            .icon(Stack),
        ]),
    ),
);
