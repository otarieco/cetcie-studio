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
    !value || value.length < 50 || value.length > 160
      ? STATUS.CRITICAL
      : value.length < 70
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
          {value?.length || 0} / 160
        </div>
      </Card>
    </Stack>
  );
};

export default {
  name: 'seo.description',
  title: 'Seo Description',
  description:
    'Facultatif mais fortement encouragé car il vous aidera à convertir plus de visiteurs de Google et des réseaux sociaux. Idéalement entre 70 et 160 caractères.',
  type: 'text',
  rows: 4,
  components: {
    input: CustomInput,
  },
};