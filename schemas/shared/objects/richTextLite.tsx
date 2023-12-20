import {ArrayOfObjectsInputProps, defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';
import {Stack} from '@sanity/ui';

export const CustomRichTextInput = (props: ArrayOfObjectsInputProps) => {
  return <Stack className="richText richText--lite">{props.renderDefault(props)}</Stack>;
};

export default defineType({
  name: SANITY_FIELDS.RICHTEXT_LITE,
  title: 'RichText Lite',
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
        decorators: [],
        annotations: [],
      },
    },
  ],
});