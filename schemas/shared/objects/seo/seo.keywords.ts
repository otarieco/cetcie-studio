export default {
  name: 'seo.keywords',
  title: 'Seo Keywords',
  description: "Liste des mots-clés cibles, pas d'optimisations spécifiques.",
  // description: 'List the targets keywords, no specific optimisations.',
  type: 'array',
  of: [{type: 'string'}],
  options: {
    layout: 'tags',
  },
};