import {type ArrayOfObjectsInputProps, defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';
import {Stack, Text} from '@sanity/ui';
import {TextBolder, TextItalic} from 'phosphor-react';

export const CustomRichTextProduct = (props: ArrayOfObjectsInputProps) => {
  return (
    <Stack className="richText richText--product_large_description">
      {props.renderDefault(props)}
    </Stack>
  );
};

const TextSizes = (props: any) => {
  if (props.value === 'uppercase') {
    return (
      <span
        style={{
          textTransform: 'uppercase',
          fontSize: '1.2em',
        }}
      >
        {props.children}
      </span>
    );
  }

  if (props.value === 'large') {
    return <Text size={4}>{props.children}</Text>;
  }

  if (props.value === 'handwritten') {
    return (
      <span style={{ fontFamily: 'script', fontSize: '2rem' }}>
        {props.children}
      </span>
    );
  }

  return null;
};

export default defineType({
  name: SANITY_FIELDS.RICHTEXT_PRODUCT_LARGE_DESCRIPTION,
  title: 'RichText Product Large Description',
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
        {title: 'Large', value: 'large', component: TextSizes},
        {title: 'Manuscrit', value: 'handwritten', component: TextSizes},
        // {title: 'H2', value: 'h2'},
        // {title: 'H3', value: 'h3'},
        // {title: 'H4', value: 'h4'},
      ],
      lists: [],
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
    {
      type: SANITY_FIELDS.MEDIA_EXTRA,
    },
  ],
});
