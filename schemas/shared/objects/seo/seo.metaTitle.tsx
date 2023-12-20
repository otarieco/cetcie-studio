/* eslint-disable no-nested-ternary */
import {Card, Inline, Stack, Text} from '@sanity/ui';
import type {StringFieldProps} from 'sanity';

enum STATUS {
  CRITICAL = 'critical',
  CAUTION = 'caution',
  POSITIVE = 'positive',
}

const COLORS = {
  critical: '#A30E0E',
  caution: '#D5AB01',
  positive: '#0EA34A',
};

const CustomMetaTitleField = ({title, description, value, ...props}: StringFieldProps) => {
  const CURRENT_STATUS =
    !value || value.length < 3 || value.length > 70
      ? STATUS.CRITICAL
      : value.length < 15
        ? STATUS.CAUTION
        : STATUS.POSITIVE;

  return (
    <Stack space={2}>
      <Card>
        <Text size={1} weight="semibold">
          {title}
        </Text>
      </Card>
      <Card marginBottom={2}>
        <Text size={1} muted>
          {description}
        </Text>
      </Card>
      <Inline>
        <Card padding={1} border={true} radius={2} tone={CURRENT_STATUS}>
          <Text size={1} weight="medium" style={{color: COLORS[CURRENT_STATUS]}}>
            {value?.length || 0} / 70
          </Text>
        </Card>
      </Inline>
      <Card>{props.renderDefault(props as any)}</Card>
    </Stack>
  );
};

export default {
  name: 'seo.metaTitle',
  title: 'Seo Meta Title',
  description: 'Titre utilisé par les moteurs de recherche. Idéalement entre 15 et 70 caractères.',
  // description:
  //   'Make it as enticing as possible to convert users in socials feeds and Google. Ideally between 15 and 70 characters.',
  type: 'string',
  components: {
    field: CustomMetaTitleField,
  },
};