import {type ArrayOfObjectsInputProps, defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';
import {Heading, Stack} from '@sanity/ui';

const TextSizes = (props: any) => {
  if (props.value === 'title')
    return (
      <Heading as="h2" size={3}>
        {props.children}
      </Heading>
    );

  return null;
};

export const CustomRichTextInput = (props: ArrayOfObjectsInputProps) => {
  return <Stack className="richText richText--regular">{props.renderDefault(props)}</Stack>;
};

export default defineType({
  name: SANITY_FIELDS.RICHTEXT_REGULAR,
  title: 'RichText Regular',
  type: 'array',
  components: {
    input: CustomRichTextInput,
  },
  of: [
    {
      title: 'Block',
      type: 'block',
      options: {},
      styles: [
        {title: 'Paragraphe', value: 'normal'},
        {title: 'Titre', value: 'title', component: TextSizes},
      ],
      lists: [],
      marks: {
        decorators: [],
        annotations: [],
      },
    },
  ],
});