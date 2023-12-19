import {ListItemBuilder} from 'sanity/lib/exports/desk';
import defineStructure from '../../utils/defineStructure';
import {Cat} from 'phosphor-react';
import page from './page';
import settings from './settings';
import blog from './blog';

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