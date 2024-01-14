import {Notebook} from 'phosphor-react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SHOPIFY_SECTIONS} from '../../../../types/sanity.schemas';

export default defineType({
  name: SHOPIFY_SECTIONS.PRODUCT_ADVICE,
  title: "Conseil d'utilisation",
  type: 'object',
  icon: () => <Notebook width="1em" height="1em" />,
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'media',
      title: 'Media',
      type: SANITY_FIELDS.MEDIA,
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'title',
    },
    prepare(selection: any) {
      const {title, subtitle} = selection;
      return {
        title,
        subtitle,
      };
    },
  },
});