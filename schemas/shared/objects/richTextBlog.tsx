import {ArrayOfObjectsInputProps, defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../sanity.schemas';
import {PortableTextBlock} from '@portabletext/types';
import {Stack} from '@sanity/ui';
import {HighlighterCircle} from 'phosphor-react';
import {Media} from './media';

export type RichTextBlog = (PortableTextBlock | Media)[] & {
  _type: SANITY_FIELDS.RICHTEXT_BLOG;
};

const HighlightDecorator = (props: any) => (
  <span style={{backgroundColor: 'yellow'}}>{props.children}</span>
);

export const CustomRichTextInput = (props: ArrayOfObjectsInputProps) => {
  return <Stack className="richText richText--blog">{props.renderDefault(props)}</Stack>;
};

export default defineType({
  name: SANITY_FIELDS.RICHTEXT_BLOG,
  title: 'RichText Blog',
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
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {
            title: 'Highlight',
            value: 'highlight',
            icon: HighlighterCircle,
            component: HighlightDecorator,
          },
          {title: 'Strike', value: 'strike-through'},
        ],
        annotations: [
          {
            type: SANITY_FIELDS.LINK,
          },
        ],
      },
    },
    {
      type: SANITY_FIELDS.MEDIA,
    },
  ],
});