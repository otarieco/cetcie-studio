import {defineType} from 'sanity';
import {
  SANITY_DOCUMENTS,
  SANITY_FIELDS,
  SANITY_SINGLETONS,
  SHOPIFY_DOCUMENTS,
} from '../../../types/sanity.schemas';
import {Link as LinkIcon} from 'phosphor-react';
import type {Link} from '../../../types/shared/objects/link';

export default defineType({
  name: SANITY_FIELDS.LINK,
  title: 'Lien',
  type: 'object',
  icon: () => <LinkIcon />,
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Titre',
      description: 'Texte du lien',
      type: 'string',
    },
    {
      name: 'linkType',
      title: 'Type de lien',
      type: 'string',
      initialValue: 'page',
      options: {
        list: [
          {
            title: 'Page',
            value: 'page',
          },
          {
            title: 'Externe',
            value: 'external',
          },
          {
            title: 'Blog',
            value: 'blog',
          },
          {
            title: 'Produit',
            value: 'product',
          },
          {
            title: 'Collection',
            value: 'collection',
          },
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'doc',
      title: 'Document',
      description: 'Redirige vers une page interne du site',
      type: 'reference',
      options: {
        disableNew: true,
        filter: ({document, parent: _parent, parentPath}) => {
          const parent = _parent as Link;
          // 'horse' | 'pets'
          const siteType = document?._type.split('_')[0];
          // 'page' | 'external' | 'blog' | 'product' | 'collection'
          const linkType = parent?.linkType;

          if (linkType === 'page') {
            return Promise.resolve({
              filter: '_type match $docType',
              params: {
                docType: `${siteType}_page*`,
              },
            });
          }

          if (linkType === 'blog') {
            return Promise.resolve({
              filter: '_type == $docType',
              params: {
                docType: `${siteType}_blog`,
              },
            });
          }

          if (linkType === 'product') {
            return Promise.resolve({
              filter: '_type == $docType',
              params: {
                docType: 'product',
              },
            });
          }

          if (linkType === 'collection') {
            return Promise.resolve({
              filter: '_type == $docType',
              params: {
                docType: 'collection',
              },
            });
          }

          return Promise.resolve({
            filter: '*',
          });
        },
      },
      to: [
        ...Array.from([
          ...Object.values(SANITY_SINGLETONS),
          ...Object.values(SANITY_DOCUMENTS).filter(
            (doc) => doc.endsWith('page') || doc.endsWith('blog'),
          ),
          SHOPIFY_DOCUMENTS.PRODUCT,
          SHOPIFY_DOCUMENTS.COLLECTION,
        ]).map((singleton) => ({
          type: singleton,
        })),
      ],
      readOnly: ({parent}: {parent: Link}) => !!parent?.url,
      hidden: ({parent}) => !['page', 'blog', 'product', 'collection'].includes(parent?.linkType),
    },
    {
      name: 'url',
      title: 'Url',
      description: 'Url externe au site',
      type: SANITY_FIELDS.URL,
      readOnly: ({parent}: {parent: Link}) => !!parent?.doc,
      hidden: ({parent}) => parent?.linkType !== 'external',
    },
  ],
  preview: {
    select: {
      title: 'title',
      pageTitle: 'page.title',
      pageSlug: 'page.slug.current',
      url: 'url',
    },
    prepare(selection: any) {
      const {title, pageTitle, url, pageSlug} = selection;
      return {
        title: title || pageTitle,
        subtitle: url || pageSlug,
        media: LinkIcon,
      };
    },
  },
});