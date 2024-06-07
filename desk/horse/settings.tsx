import defineStructure from '../../utils/defineStructure';
import {ArrowsClockwise, GearSix, UsersThree} from '@phosphor-icons/react';
import {SANITY_DOCUMENTS, SANITY_SINGLETONS} from '../../types/sanity.schemas';
import faq from './faq';
import animal from './animalType';

export default defineStructure((S, context) =>
  S.listItem()
    .title('Paramètres')
    .icon(GearSix)
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
          // S.documentListItem()
          //   .schemaType(SANITY_SINGLETONS.$HORSE_INFORMATION)
          //   .id(SANITY_SINGLETONS.$HORSE_INFORMATION),

          // FOOTER SINGLETON
          S.documentListItem()
            .schemaType(SANITY_SINGLETONS.$HORSE_FOOTER)
            .id(SANITY_SINGLETONS.$HORSE_FOOTER),

          // SOCIALS DOCUMENTS
          // S.documentTypeListItem(SANITY_DOCUMENTS.$HORSE_SOCIAL)
          //   .title('Réseaux sociaux')
          //   .icon(UsersThree),

          S.divider(),

          faq(S, context),
          animal(S, context),

          // REUSABLE CONTENT DOCUMENTS
          S.documentTypeListItem(SANITY_DOCUMENTS.$HORSE_REUSABLE_CONTENT)
            .title('Contenu réutilisable')
            .icon(ArrowsClockwise),
        ]),
    ),
);
