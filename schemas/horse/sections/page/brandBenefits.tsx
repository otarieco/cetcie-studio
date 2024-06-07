import {Image, Medal} from '@phosphor-icons/react';
import {defineType} from 'sanity';
import {SANITY_FIELDS, SANITY_SECTIONS} from '../../../../types/sanity.schemas';
import {blocksToText} from '../../../../utils/blocksToText';

export default defineType({
  name: SANITY_SECTIONS.$HORSE_BRAND_BENEFITS,
  title: 'Bénéfices',
  type: 'object',
  icon: () => <Medal width="1em" height="1em" />,
  fields: [
    {
      name: 'benefits',
      title: 'Bénéfices',
      type: 'array',
      of: [
        {
          name: 'benefit',
          title: 'Bénéfice',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: SANITY_FIELDS.IMAGE,
            },
            {
              name: 'label',
              title: 'Label',
              type: SANITY_FIELDS.RICHTEXT_LITE,
            },
          ],
          preview: {
            select: {
              label: 'label',
              icon: 'icon',
            },
            prepare({label, icon}) {
              return {
                title: blocksToText(label),
                media: icon || <Image />,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      benefits: 'benefits',
    },
    prepare({benefits}) {
      return {
        title: 'Bénéfices',
        subtitle: benefits?.map((benefit: any) => blocksToText(benefit.label)).join(' | '),
      };
    },
  },
});
