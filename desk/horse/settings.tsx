import defineStructure from '../../utils/defineStructure';
import {ArrowsClockwise, GearSix, UsersThree} from 'phosphor-react';
import {SANITY_DOCUMENTS, SANITY_SINGLETONS} from '../../types/sanity.schemas';
import type {ListItemBuilder} from 'sanity/lib/exports/desk';
import animal from './animalType';

export default defineStructure<ListItemBuilder>((S, context) =>
  S.listItem()
    .title('Paramètres')
    .icon(() => <GearSix width="1em" height="1em" />)
    .child(
      S.list()
        .title('Paramètres')
        .items([
          // FEATURE FLAGS SINGLETON
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_FEATURE_FLAGS)
            .id(SANITY_SINGLETONS.$HORSE_FEATURE_FLAGS)
            .title('Site'),

          // INFORMATION SINGLETON
            S.documentListItem()
              .schemaType(SANITY_SINGLETONS.$HORSE_INFORMATION)
              .id(SANITY_SINGLETONS.$HORSE_INFORMATION),

          // FOOTER SINGLETON
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_FOOTER)
            .id(SANITY_SINGLETONS.$HORSE_FOOTER),

          // SOCIALS DOCUMENTS
          S.documentTypeListItem(SANITY_DOCUMENTS.$HORSE_SOCIAL)
            .title('Réseaux sociaux')
            .icon(UsersThree),

          animal(S, context),

          // REUSABLE CONTENT DOCUMENTS
          S.documentTypeListItem(SANITY_DOCUMENTS.$HORSE_REUSABLE_CONTENT)
            .title('Contenu réutilisable')
            .icon(ArrowsClockwise),
        ]),
    ),
);
