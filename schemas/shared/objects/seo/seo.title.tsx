/* eslint-disable no-nested-ternary */
import {Card, Stack} from '@sanity/ui';
import type {StringFieldProps} from 'sanity';

enum STATUS {
  CRITICAL = 'critical',
  CAUTION = 'caution',
  POSITIVE = 'positive',
}

const STYLES = {
  critical: {
    color: '#CE2C31',
    background: '#FFF7F7',
    border: '1px solid #FDBDBE',
  },
  caution: {
    color: '#AB6400',
    background: '#FEFBE9',
    border: '1px solid #F3D673',
  },
  positive: {
    color: '#2A7E3B',
    background: '#F5FBF5',
    border: '1px solid #B2DDB5',
  },
};

const CustomInput = ({title, description, value, ...props}: StringFieldProps) => {
  const CURRENT_STATUS =
    !value || value.length < 3 || value.length > 70
      ? STATUS.CRITICAL
      : value.length < 15
        ? STATUS.CAUTION
        : STATUS.POSITIVE;

  return (
    <Stack space={1}>
      <Card>{props.renderDefault(props as any)}</Card>
      <Card>
        <div
          style={{
            ...STYLES[CURRENT_STATUS],
            width: 'max-content',
            fontSize: '0.675rem',
            fontWeight: '500',
            padding: '0 2px',
            borderRadius: '0.25rem',
            marginTop: '4px',
          }}
        >
          {value?.length || 0} / 70
        </div>
      </Card>
    </Stack>
  );
};

export default {
  name: 'seo.title',
  title: 'Seo Title',
  description: 'Titre utilisé par les moteurs de recherche. Idéalement entre 15 et 70 caractères.',
  type: 'string',
  components: {
    input: CustomInput,
  },
};