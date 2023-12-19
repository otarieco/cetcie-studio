import {ArrayOfObjectsInputProps, defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../sanity.schemas';
import {PortableTextBlock} from '@portabletext/types';
import {Heading, Stack} from '@sanity/ui';
import {Figure} from './figure';

export type RichTextComplex = (PortableTextBlock | Figure)[] & {
  _type: SANITY_FIELDS.RICHTEXT_COMPLEX;
};

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
  return <Stack className="richText richText--complex">{props.renderDefault(props)}</Stack>;
};

export default defineType({
  name: SANITY_FIELDS.RICHTEXT_COMPLEX,
  title: 'RichText Complex',
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
    {
      type: SANITY_FIELDS.FIGURE,
    },
  ],
});