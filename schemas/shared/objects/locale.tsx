import {defineType, type StringFieldProps} from 'sanity';
import {Badge, Inline} from '@sanity/ui';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';
import Flag from 'react-world-flags';
import {localesFlags} from '../../../i18n.config';

const CustomLocaleField = ({title, description, value, ...props}: StringFieldProps) => {
  return (
    <Inline>
      <Badge mode="outline" tone="default" padding={2} radius={5}>
        {value ? `${value} ` : 'Empty locale'}
        {value && <Flag code={localesFlags[value]} height="10" width="18" />}
      </Badge>
    </Inline>
  );
};

export default defineType({
  name: SANITY_FIELDS.LOCALE,
  title: 'Locale',
  type: 'string',
  components: {
    field: CustomLocaleField,
  },
});