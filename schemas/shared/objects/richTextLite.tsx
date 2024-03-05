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

const Manuscrit = (props: any) => (
  <span style={{fontFamily: 'script', fontSize: '2rem'}}>
    {props.children}
  </span>
)

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
        {title: 'Manuscrit', value: 'handwritten', component: Manuscrit},
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
