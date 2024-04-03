import defineStructure from '../../utils/defineStructure';
import {Horse} from 'phosphor-react';
import page from './page';
import settings from './settings';
import blog from './blog';
// import domain from './domain';
import { SANITY_SINGLETONS } from '../../types/sanity.schemas';

export default defineStructure((S, context) =>
  S.listItem()
    .title('Cheval')
    .icon(() => <Horse width="1em" height="1em" />)
    .child(
      S.list()
        .title('Cheval')
        .items([
          settings(S, context),
          S.divider(),
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_HOME)
            .id(SANITY_SINGLETONS.$HORSE_HOME),
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_SHOP)
            .id(SANITY_SINGLETONS.$HORSE_SHOP),
          S.divider(),
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_ABOUT)
            .id(SANITY_SINGLETONS.$HORSE_ABOUT),
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_BIOGRAPHY)
            .id(SANITY_SINGLETONS.$HORSE_BIOGRAPHY),
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_CONTACT)
            .id(SANITY_SINGLETONS.$HORSE_CONTACT),
          S.divider(),
          page(S, context),
          blog(S, context),
        ]),
    ),
);
