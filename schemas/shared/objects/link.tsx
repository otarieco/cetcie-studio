import {defineType, Slug} from 'sanity';
import {SANITY_FIELDS} from '../../../sanity.schemas';
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
  external?: boolean;
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
      name: 'external',
      title: 'Lien externe ?',
      type: 'boolean',
      initialValue: false,
      description: 'Le lien cible une page externe au site',
    },
    // {
    //   name: 'doc',
    //   title: 'Document',
    //   description: 'Redirige vers une page interne du site',
    //   type: 'reference',
    //   to: [...Array.from([]).map((singleton) => ({type: singleton}))],
    //   readOnly: ({parent}: {parent: Link}) => !!parent?.url,
    //   hidden: ({parent}) => parent?.external,
    // },
    {
      name: 'url',
      title: 'Url',
      description: 'Url externe au site',
      type: SANITY_FIELDS.URL,
      readOnly: ({parent}: {parent: Link}) => !!parent?.doc,
      hidden: ({parent}) => !parent?.external,
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