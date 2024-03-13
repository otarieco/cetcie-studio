import {Storefront} from 'phosphor-react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../../types/sanity.schemas';

export default defineType({
  name: SANITY_SECTIONS.$HORSE_HOME_VISIT_STORE,
  title: 'Parcourir la boutique',
  type: 'object',
  icon: () => <Storefront width="1em" height="1em" />,
  fields: [
    {
      name: 'media',
      title: 'Media',
      type: SANITY_FIELDS.MEDIA,
    },
    {
      name: 'link',
      title: 'Lien',
      type: SANITY_FIELDS.LINK_INTERNAL,
    },
  ],
  preview: {
    select: {
      link: 'link',
    },
    prepare({link}) {
      return {
        title: link?.title,
      };
    },
  },
});
