import defineStructure from '../../utils/defineStructure';
import {Horse} from 'phosphor-react';
import page from './page';
import settings from './settings';
import blog from './blog';
import type {ListItemBuilder} from 'sanity/lib/exports/desk';
import domain from './domain';
import faq from './faq';
import { SANITY_SINGLETONS } from '../../types/sanity.schemas';

export default defineStructure<ListItemBuilder>((S, context) =>
  S.listItem()
    .title('Cheval')
    .icon(() => <Horse width="1em" height="1em" />)
    .child(
      S.list()
        .title('Cheval')
        .items([
          // HOME PAGE
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_HOME)
            .id(SANITY_SINGLETONS.$HORSE_HOME),
          // PAGES
          page(S, context),
          S.divider(),
          // SHOP
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_SHOP)
            .id(SANITY_SINGLETONS.$HORSE_SHOP),
          // // HEADER
          // S.documentListItem()
          //   .schemaType(SANITY_SINGLETONS.$HORSE_HEADER)
          //   .id(SANITY_SINGLETONS.$HORSE_HEADER),
          // ARTICLES
          blog(S, context),
          // F.A.Q.
          faq(S, context),
          S.divider(),
          // SETTINGS
          settings(S, context),
        ]),
    ),
);
