import defineStructure from '../../utils/defineStructure';
import {SANITY_DOCUMENTS, SANITY_SINGLETONS} from '../../types/sanity.schemas';
import {ArrowsClockwise, Browser, Stack} from 'phosphor-react';
import type {ListItemBuilder} from 'sanity/lib/exports/desk';

export default defineStructure<ListItemBuilder>((S, context) =>
  S.listItem()
    .title('Pages')
    .icon(() => <Browser width="1em" height="1em" />)
    .child(
      S.list()
        .title('Pages')
        .items([
          // HOME PAGE SINGLETON
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_HOME)
            .id(SANITY_SINGLETONS.$HORSE_HOME),

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
            .title('Pages')
            .icon(() => <Stack width="1em" height="1em" />),

          // REUSABLE CONTENT DOCUMENTS
          S.documentTypeListItem(SANITY_DOCUMENTS.$HORSE_REUSABLE_CONTENT)
            .title('Contenu réutilisable')
            .icon(() => <ArrowsClockwise width="1em" height="1em" />),
        ]),
    ),
);
