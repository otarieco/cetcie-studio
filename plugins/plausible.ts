import {definePlugin} from 'sanity';
import {ChartLine} from 'phosphor-react';
import Plausible from './PlausibleIframe';

export const plausible = definePlugin((options: any = {}) => {
  return {
    name: 'plausible',
    tools: [
      {
        name: 'plausible',
        title: 'Analytics',
        icon: ChartLine,
        options,
        component: Plausible,
      },
    ],
  };
});