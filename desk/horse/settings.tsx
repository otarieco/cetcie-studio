import defineStructure from '../../utils/defineStructure';
import {GearSix, UsersThree} from 'phosphor-react';
import {SANITY_DOCUMENTS, SANITY_SINGLETONS} from '../../types/sanity.schemas';
import type {ListItemBuilder} from 'sanity/lib/exports/desk';

export default defineStructure<ListItemBuilder>((S, context) =>
  S.listItem()
    .title('Paramètres')
    .icon(() => <GearSix width="1em" height="1em" />)
    .child(
      S.list()
        .title('Paramètres')
        .items([
          // HEADER SINGLETON
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_HEADER)
            .id(SANITY_SINGLETONS.$HORSE_HEADER),

          // FOOTER SINGLETON
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_FOOTER)
            .id(SANITY_SINGLETONS.$HORSE_FOOTER),

          // INFORMATION SINGLETON
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_INFORMATION)
            .id(SANITY_SINGLETONS.$HORSE_INFORMATION),

          // SOCIALS DOCUMENTS
          S.documentTypeListItem(SANITY_DOCUMENTS.$HORSE_SOCIAL)
            .title('Socials')
            .icon(() => <UsersThree width="1em" height="1em" />),

          // FEATURE FLAGS SINGLETON
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_FEATURE_FLAGS)
            .id(SANITY_SINGLETONS.$HORSE_FEATURE_FLAGS),
        ]),
    ),
);
