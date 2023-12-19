import {defineField} from 'sanity';

import ProxyStringInput from '../../../utils/shopify/components/inputs/ProxyString';

export default defineField({
  name: 'proxyString',
  title: 'Title',
  type: 'string',
  components: {
    input: ProxyStringInput,
  },
});