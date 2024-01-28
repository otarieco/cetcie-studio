import {VideoCamera} from 'phosphor-react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SHOPIFY_SECTIONS} from '../../../../types/sanity.schemas';

export default defineType({
  name: SHOPIFY_SECTIONS.PRODUCT_FULL_VIDEO,
  title: 'Full Vidéo',
  type: 'object',
  icon: () => <VideoCamera width="1em" height="1em" />,
  fields: [
    {
      name: 'video',
      title: 'Vidéo',
      type: SANITY_FIELDS.MUX_VIDEO,
    },
  ],
  preview: {
    select: {},
    prepare(selection: any) {
      const {} = selection;
      return {
        title: 'Full video',
      };
    },
  },
});
