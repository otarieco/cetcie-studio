import React from 'react';
import {defineField, defineType} from 'sanity';
import pluralize from 'pluralize-esm';
import ShopifyIcon from '../../../utils/shopify/components/icons/Shopify';
import CollectionHiddenInput from '../../../utils/shopify/components/inputs/CollectionHidden';
import ShopifyDocumentStatus from '../../../utils/shopify/components/media/ShopifyDocumentStatus';
import {MagnifyingGlass, Package, PencilSimpleLine} from 'phosphor-react';
import {SANITY_FIELDS, SHOPIFY_DOCUMENTS} from '../../../types/sanity.schemas';

const GROUPS = [
  {
    default: true,
    name: 'editorial',
    title: 'Editorial',
    icon: () => <PencilSimpleLine />,
  },
  {
    name: 'shopifySync',
    title: 'Shopify sync',
    icon: ShopifyIcon,
  },
  {
    name: 'seo',
    title: 'Seo',
    icon: () => <MagnifyingGlass />,
  },
];

export default defineType({
  name: SHOPIFY_DOCUMENTS.COLLECTION,
  title: 'Collection',
  type: 'document',
  icon: () => <Package width="1em" height="1em" />,
  groups: GROUPS,
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
      group: ['editorial', 'shopifySync'],
    },
    // Product hidden status
    defineField({
      name: 'hidden',
      type: 'string',
      components: {
        field: CollectionHiddenInput,
      },
      hidden: ({parent}) => {
        const isDeleted = parent?.store?.isDeleted;
        return !isDeleted;
      },
    }),
    // Title (proxy)
    defineField({
      name: 'titleProxy',
      title: 'Title',
      type: 'proxyString',
      options: {field: 'store.title'},
    }),
    // Slug (proxy)
    defineField({
      name: 'slugProxy',
      title: 'Slug',
      type: 'proxyString',
      options: {field: 'store.slug.current'},
    }),
    /**
     * Collection Editorial
     */
    {
      name: 'editorial',
      title: 'Collection',
      type: SHOPIFY_DOCUMENTS.COLLECTION_EDITORIAL,
      group: 'editorial',
    },
    // Show hero
    defineField({
      name: 'showHero',
      title: 'Show hero',
      type: 'boolean',
      description: 'If disabled, page title will be displayed instead',
      readOnly: true,
      hidden: false,
      group: 'shopifySync',
    }),
    // Shopify collection
    defineField({
      name: 'store',
      title: 'Shopify',
      type: 'shopifyCollection',
      description: 'Collection data from Shopify (read-only)',
      group: 'shopifySync',
    }),
    // Seo
    {
      name: 'seo',
      title: 'Seo',
      type: SANITY_FIELDS.SEO,
      group: 'seo',
    },
  ],
  orderings: [
    {
      name: 'titleAsc',
      title: 'Title (A-Z)',
      by: [{field: 'store.title', direction: 'asc'}],
    },
    {
      name: 'titleDesc',
      title: 'Title (Z-A)',
      by: [{field: 'store.title', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      imageUrl: 'store.imageUrl',
      isDeleted: 'store.isDeleted',
      rules: 'store.rules',
      title: 'store.title',
    },
    prepare(selection) {
      const {imageUrl, isDeleted, rules, title} = selection;
      const ruleCount = rules?.length || 0;

      return {
        media: (
          <ShopifyDocumentStatus
            isDeleted={isDeleted}
            type="collection"
            url={imageUrl}
            title={title}
          />
        ),
        subtitle: ruleCount > 0 ? `Automated (${pluralize('rule', ruleCount, true)})` : 'Manual',
        title,
      };
    },
  },
});