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
  icon: LinkIcon,
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'external',
      title: 'Lien externe ?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'externalLink',
      title: 'Lien url',
      description: 'Url externe au site',
      type: SANITY_FIELDS.LINK_EXTERNAL,
      hidden: ({parent}) => !parent?.external,
    },
    {
      name: 'internalLink',
      title: 'Page / Collection',
      description: 'Page interne du site',
      type: SANITY_FIELDS.LINK_INTERNAL,
      hidden: ({parent}) => !!parent?.external,
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