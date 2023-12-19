import {defineType, Slug} from 'sanity';
import {SANITY_DOCUMENTS, SANITY_FIELDS, SANITY_SINGLETONS} from '../../../sanity.schemas';
import {Home} from '../../horse/singletons/home';
import {Link} from 'phosphor-react';

type LinkDocRef = {
  _id: string;
  _type: Home['_type'];

  title?: string;
  slug?: Slug;
} | null;

export type Link = {
  _type: SANITY_FIELDS.LINK;
  title?: string;
  linkType?: 'page' | 'external' | 'blog' | 'product' | 'collection';
  doc?: LinkDocRef;
  url?: string;
};

export default defineType({
  name: SANITY_FIELDS.LINK,
  title: 'Lien',
  type: 'object',
  icon: () => <Link />,
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
        filter: ({document, parent, parentPath}) => {
          const siteType = document?._type.split('_')[0];
          const linkType = parent?.linkType;
          // TODO: fix filter
          return Promise.resolve({
            filter: '_type == $docType || _type == horse_page_home',
            params: {
              docType: siteType + '_' + linkType,
            },
          });
        },
      },
      to: [
        ...Array.from([
          ...Object.values(SANITY_SINGLETONS),
          ...Object.values(SANITY_DOCUMENTS).filter(
            (doc) => doc.endsWith('page') || doc.endsWith('blog'),
          ),
          'product',
          'collection',
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
        media: Link,
      };
    },
  },
});