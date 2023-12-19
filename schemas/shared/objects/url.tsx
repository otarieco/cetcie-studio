import {Stack, Text} from '@sanity/ui';
import type {StringInputProps} from 'sanity';
import {defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../sanity.schemas';
import {ArrowSquareOut} from 'phosphor-react';

export const CustomUrlInput = (props: StringInputProps) => {
  const {value, validation} = props;
  const showLink = typeof value === 'string' && value.length > 3 && !validation.length;
  return (
    <Stack space={2}>
      {props.renderDefault(props)}
      <Text size={1}>
        {showLink && (
          <a href={props.value} target="_blank" rel="noopener noreferrer">
            Voir la page <ArrowSquareOut width="1em" height="1em" />
          </a>
        )}
      </Text>
    </Stack>
  );
};

export type Url = string;

export default defineType({
  name: SANITY_FIELDS.URL,
  title: 'Url',
  type: 'url',
  placeholder: 'https://site.fr',
  validation: (Rule) =>
    Rule.custom((value) => {
      if (value && !value.startsWith('https://')) {
        return "L'url doit commencer par https://";
      }
      return true;
    }),
  components: {
    input: CustomUrlInput,
  },
});