import {Cat} from 'phosphor-react';
import defineStructure from '../../utils/defineStructure';
import type {ListItemBuilder} from 'sanity/lib/exports/desk';
import page from './page';
import blog from './blog';
import settings from './settings';

export default defineStructure<ListItemBuilder>((S, context) =>
  S.listItem()
    .title('Chiens & chats')
    .icon(() => <Cat width="1em" height="1em" />)
    .child(
      S.list()
        .title('Chiens & chats')
        .items([page(S, context), blog(S, context), settings(S, context)]),
    ),
);