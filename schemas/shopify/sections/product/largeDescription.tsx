import {TextAlignCenter} from 'phosphor-react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SHOPIFY_SECTIONS} from '../../../../types/sanity.schemas';
import {blocksToText} from '../../../../utils/blocksToText';

export default defineType({
  name: SHOPIFY_SECTIONS.PRODUCT_LARGE_DESCRIPTION,
  title: 'Large description',
  type: 'object',
  icon: () => <TextAlignCenter width="1em" height="1em" />,
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: SANITY_FIELDS.RICHTEXT_LITE,
    },
  ],
  preview: {
    select: {
      description: 'description',
    },
    prepare(selection: any) {
      const {description} = selection;
      return {
        title: 'Large Description',
        subtitle: blocksToText(description),
      };
    },
  },
});
