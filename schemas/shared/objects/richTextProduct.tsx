import {type ArrayOfObjectsInputProps, defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';
import {Stack} from '@sanity/ui';
import {TextBolder, TextItalic} from 'phosphor-react';

export const CustomRichTextInput = (props: ArrayOfObjectsInputProps) => {
  return <Stack className="richText richText--product">{props.renderDefault(props)}</Stack>;
};

export default defineType({
  name: SANITY_FIELDS.RICHTEXT_PRODUCT,
  title: 'RichText Product',
  type: 'array',
  components: {
    input: CustomRichTextInput,
  },
  of: [
    {
      title: 'Block',
      type: 'block',
      options: {},
      styles: [{title: 'Paragraphe', value: 'normal'}],
      lists: [],
      marks: {
        decorators: [
          {title: 'Italique', value: 'em', icon: TextItalic},
          {
            title: 'Strong',
            value: 'strong',
            icon: TextBolder,
          },
        ],
        annotations: [],
      },
    },
  ],
});
