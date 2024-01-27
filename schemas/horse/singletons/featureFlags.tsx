import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SINGLETONS} from '../../../types/sanity.schemas';
import {Flag} from 'phosphor-react';

export default defineType({
  name: SANITY_SINGLETONS.$HORSE_FEATURE_FLAGS,
  title: 'Fonctionnalités',
  type: 'document',
  icon: () => <Flag width="1em" height="1em" />,
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
    },
    {
      name: 'notificationBar',
      title: 'Bar de notifications',
      description: 'Texte promotionnel se situant tout en haut du site',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Activé',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'notification',
          title: 'Notification',
          type: SANITY_FIELDS.RICHTEXT_LITE,
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Fonctionnalités',
      };
    },
  },
});
