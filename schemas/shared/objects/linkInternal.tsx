import {defineType} from 'sanity';
import {
  SANITY_DOCUMENTS,
  SANITY_FIELDS,
  SANITY_SINGLETONS,
  SHOPIFY_DOCUMENTS,
} from '../../../types/sanity.schemas';
import {Square, SquaresFour, File} from '@phosphor-icons/react';

export default defineType({
  name: SANITY_FIELDS.LINK_INTERNAL,
  title: 'Page / Collection',
  type: 'object',
  icon: File,
  // options: {
  //   collapsible: true,
  //   collapsed: true,
  // },
  fields: [
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
    },
    {
      name: 'title',
      title: 'Titre personalisé',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      docType: 'doc._type',
      docTitle: 'doc.title',
      storeTitle: 'doc.store.title',
      slug: 'doc.slug.current',
    },
    prepare({title, docType, docTitle, storeTitle, slug}) {

      const medias = {
        [SHOPIFY_DOCUMENTS.PRODUCT]: Square,
        [SHOPIFY_DOCUMENTS.COLLECTION]: SquaresFour,
      };

      return {
        title: title || docTitle || storeTitle,
        subtitle: slug,
        media: medias[docType] || File,
      };
    },
  },
});