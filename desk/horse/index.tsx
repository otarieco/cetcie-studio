import defineStructure from '../../utils/defineStructure';
import {Horse} from 'phosphor-react';
import page from './page';
import settings from './settings';
import blog from './blog';
import type {ListItemBuilder} from 'sanity/lib/exports/desk';

export default defineStructure<ListItemBuilder>((S, context) =>
  S.listItem()
    .title('Cheval')
    .icon(() => <Horse width="1em" height="1em" />)
    .child(
      S.list()
        .title('Cheval')
        .items([page(S, context), blog(S, context), settings(S, context)]),
    ),
);