import {Locale} from './types/shared/locale';

export const i18n: {
  defaultLocale: Locale;
  locales: readonly ['fr'];
} = {
  defaultLocale: 'fr',
  locales: ['fr'],
};

export const localesFlags: {
  [key: string]: string;
} = {
  fr: 'fr',
  en: 'gb',
};