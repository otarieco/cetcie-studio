export const i18n: {
  defaultLocale: Locale
  locales: readonly ['fr']
} = {
  defaultLocale: 'fr',
  locales: ['fr'],
}

export type Locale = (typeof i18n.locales)[number]

export const localesFlags: {
  [key: string]: string
} = {
  fr: 'fr',
  en: 'gb',
}