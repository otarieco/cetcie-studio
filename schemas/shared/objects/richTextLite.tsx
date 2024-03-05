import {type ArrayOfObjectsInputProps, defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';
import {Stack, Text} from '@sanity/ui';
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
  // components: {
  //   input: (props: ArrayOfObjectsInputProps) => CustomRichTextLite({props}),
  // },
  of: [
    {
      title: 'Block',
      type: 'block',
      options: {},
      styles: [
        {title: 'Paragraphe', value: 'normal'},
        {
          title: 'Large',
          value: 'large',
          component: (props) => <span style={{ fontFamily: 'ui-serif, serif', fontSize: '1.3em' }}>{props.children}</span>,
        },
        {
          title: 'Manuscrit',
          value: 'handwritten',
          component: (props: any) => (
            <span style={{fontFamily: 'script', fontSize: '2rem'}}>{props.children}</span>
          ),
        },
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
