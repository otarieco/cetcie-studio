import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SINGLETONS} from '../../../types/sanity.schemas';
import {Globe} from 'phosphor-react';

export default defineType({
  name: SANITY_SINGLETONS.$HORSE_FEATURE_FLAGS,
  title: 'Global',
  type: 'document',
  icon: Globe,
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
    },
    {
      name: 'notificationBar',
      title: 'Bandeau de notifications',
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
