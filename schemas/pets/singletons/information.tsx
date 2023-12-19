import {defineType, SanityDocument} from 'sanity';
import {Info} from 'phosphor-react';
import {SANITY_FIELDS, SANITY_SINGLETONS} from '../../../sanity.schemas';
import {Locale} from '../../../i18n.config';

export type Information = SanityDocument & {
  _type: SANITY_SINGLETONS.$PETS_INFORMATION;
  locale?: Locale;
  company?: string;
  address?: string;
  postalCode?: string;
  city?: string;
  region?: string;
  country?: string;
  email?: string;
  tel?: string;
};

export default defineType({
  name: SANITY_SINGLETONS.$PETS_INFORMATION,
  title: 'Information',
  type: 'document',
  icon: () => <Info width="1em" height="1em" />,
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
    },
    {
      name: 'company',
      title: "Nom de l'entreprise",
      type: 'string',
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'string',
    },
    {
      name: 'postalCode',
      title: 'Code Postal',
      type: 'string',
    },
    {
      name: 'city',
      title: 'Ville',
      type: 'string',
    },
    {
      name: 'region',
      title: 'Région',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Pays',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'tel',
      title: 'Téléphone',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Information',
      };
    },
  },
});