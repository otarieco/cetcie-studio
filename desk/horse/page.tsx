import {ListItemBuilder} from 'sanity/lib/exports/desk';
import defineStructure from '../../utils/defineStructure';
import {SANITY_SINGLETONS} from '../../sanity.schemas';
import {Browser} from 'phosphor-react';

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
        ]),
    ),
);