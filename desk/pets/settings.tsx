import {ListItemBuilder} from 'sanity/lib/exports/desk';
import defineStructure from '../../utils/defineStructure';
import {GearSix, UsersThree} from 'phosphor-react';
import {SANITY_DOCUMENTS, SANITY_SINGLETONS} from '../../sanity.schemas';

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
            .schemaType(SANITY_SINGLETONS.$PETS_HEADER)
            .id(SANITY_SINGLETONS.$PETS_HEADER),

          // FOOTER SINGLETON
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$PETS_FOOTER)
            .id(SANITY_SINGLETONS.$PETS_FOOTER),

          // INFORMATION SINGLETON
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$PETS_INFORMATION)
            .id(SANITY_SINGLETONS.$PETS_INFORMATION),

          // SOCIALS DOCUMENTS
          S.documentTypeListItem(SANITY_DOCUMENTS.$PETS_SOCIAL)
            .title('Socials')
            .icon(() => <UsersThree width="1em" height="1em" />),
        ]),
    ),
);