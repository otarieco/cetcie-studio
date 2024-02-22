import {type ArrayOfObjectsInputProps, defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';
import {Stack} from '@sanity/ui';
import {TextBolder, TextItalic} from 'phosphor-react';

export const CustomRichTextLite = ({
  props,
  icon,
}: {
  props: ArrayOfObjectsInputProps;
  icon?: string;
}) => {
  return (
    <Stack className={['richText', 'richText--lite', icon ? 'richText--with_icon' : ''].join(' ')}>
      <>
        {icon && <i dangerouslySetInnerHTML={{__html: icon}}></i>}
        {props.renderDefault(props)}
      </>
    </Stack>
  );
};

export default defineType({
  name: SANITY_FIELDS.RICHTEXT_LITE,
  title: 'RichText Lite',
  type: 'array',
  components: {
    input: (props: ArrayOfObjectsInputProps) => CustomRichTextLite({props}),
  },
  of: [
    {
      title: 'Block',
      type: 'block',
      options: {},
      styles: [{title: 'Paragraphe', value: 'normal'}],
      lists: [
        {title: 'Puce', value: 'bullet'},
        {title: 'Liste', value: 'number'},
      ],

      marks: {
        decorators: [
          {
            title: 'Italique',
            value: 'em',
            icon: TextItalic,
          },
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
