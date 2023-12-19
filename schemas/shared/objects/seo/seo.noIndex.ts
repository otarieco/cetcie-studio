export type SeoNoIndex = boolean;

export default {
  name: 'seo.noIndex',
  title: 'Seo NoIndex',
  description:
    'Si cette option est activée, elle désactive et bloque le référencement de la page par les moteurs de recherche.',
  // description: 'If enabled, deactivates and blocks the referencing of the page by search engines.',
  type: 'boolean',
  initialValue: false,
};