import {type ArrayOfObjectsInputProps, defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';
import {Stack} from '@sanity/ui';
import {TextBolder, TextItalic} from 'phosphor-react';

export const CustomRichTextProduct = (props: ArrayOfObjectsInputProps) => {
  return <Stack className="richText richText--product">{props.renderDefault(props)}</Stack>;
};

export default defineType({
  name: SANITY_FIELDS.RICHTEXT_PRODUCT,
  title: 'RichText Product',
  type: 'array',
  // components: {
  //   input: CustomRichTextProduct,
  // },
  of: [
    {
      title: 'Block',
      type: 'block',
      options: {},
      styles: [
        {title: 'Paragraphe', value: 'normal'},
        {title: 'Encadré', value: 'blockquote'},
      ],
      lists: [
        {title: 'Puce', value: 'bullet'},
        {title: 'Liste', value: 'number'},
      ],
      marks: {
        decorators: [
          // {
          //   title: 'Italique',
          //   value: 'em',
          //   icon: TextItalic,
          // },
          {
            title: 'Gras',
            value: 'strong',
            icon: TextBolder,
          },
        ],
        annotations: [],
      },
    },
  ],
});
