import {defineType} from 'sanity';
import {
  SANITY_DOCUMENTS,
  SANITY_FIELDS,
  SANITY_SINGLETONS,
  SHOPIFY_DOCUMENTS,
} from '../../../types/sanity.schemas';
import {Link as LinkIcon} from '@phosphor-icons/react';

export default defineType({
  name: SANITY_FIELDS.LINK,
  title: 'Lien',
  type: 'object',
  icon: LinkIcon,
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'external',
      title: 'Lien externe ?',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Page / Collection',
      name: 'doc',
      type: 'reference',
      to: [
        ...Array.from([
          ...Object.values(SANITY_SINGLETONS).filter((doc) => doc.includes('_page_')),
          ...Object.values(SANITY_DOCUMENTS).filter(
            (doc) => doc.endsWith('page') || doc.endsWith('blog'),
          ),
          SHOPIFY_DOCUMENTS.PRODUCT,
          SHOPIFY_DOCUMENTS.COLLECTION,
        ]).map((singleton) => ({
          type: singleton,
        })),
      ],
      options: {
        disableNew: true,
      },
      hidden: ({parent}) => !!parent?.external,
    },
    {
      name: 'url',
      title: 'Url',
      description: 'Url externe au site',
      type: SANITY_FIELDS.URL,
      hidden: ({parent}) => !parent?.external,
    },
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     pageTitle: 'page.title',
  //     pageSlug: 'page.slug.current',
  //     url: 'url',
  //   },
  //   prepare(selection: any) {
  //     const {title, pageTitle, url, pageSlug} = selection;
  //     return {
  //       title: title || pageTitle,
  //       subtitle: url || pageSlug,
  //       media: LinkIcon,
  //     };
  //   },
  // },
});