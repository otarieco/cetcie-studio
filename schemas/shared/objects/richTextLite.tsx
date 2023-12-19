import {ArrayOfObjectsInputProps, defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../sanity.schemas';
import {PortableTextBlock} from '@portabletext/types';
import {Stack} from '@sanity/ui';

export type RichTextLite = PortableTextBlock[] & {
  _type: SANITY_FIELDS.RICHTEXT_LITE;
};

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