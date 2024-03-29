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

const CustomMetaDescriptionField = ({title, description, value, ...props}: StringFieldProps) => {
  const CURRENT_STATUS =
    !value || value.length < 50 || value.length > 160
      ? STATUS.CRITICAL
      : value.length < 70
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
            {value?.length || 0} / 160
          </Text>
        </Card>
      </Inline>
      <Card>{props.renderDefault(props as any)}</Card>
    </Stack>
  );
};

export default {
  name: 'seo.description',
  title: 'Seo Description',
  description:
    'Facultatif mais fortement encouragé car il vous aidera à convertir plus de visiteurs de Google et des réseaux sociaux. Idéalement entre 70 et 160 caractères.',
  // description:
  //   "Optional but highly encouraged as it'll help you convert more visitors from Google & social. Ideally between 70 and 160 characters.",
  type: 'text',
  components: {
    field: CustomMetaDescriptionField,
  },
};