import React from 'react';
import {defineType} from 'sanity';
import ShopifyIcon from '../../../utils/shopify/components/icons/Shopify';
import CollectionHiddenInput from '../../../utils/shopify/components/inputs/CollectionHidden';
import ShopifyDocumentStatus from '../../../utils/shopify/components/media/ShopifyDocumentStatus';
import {ListBullets, MagnifyingGlass, Package} from 'phosphor-react';
import {SANITY_FIELDS, SHOPIFY_DOCUMENTS} from '../../../types/sanity.schemas';
import {seoPreview} from '../../../utils/seo.preview';

const GROUPS = [
  {
    name: 'details',
    title: 'Détails',
    default: true,
    icon: () => <ListBullets />,
  },
  {
    name: 'shopifySync',
    title: 'Shopify',
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
    // Collection hidden status
    {
      name: 'hidden',
      type: 'string',
      components: {
        field: CollectionHiddenInput,
      },
      hidden: ({parent}) => {
        const isDeleted = parent?.store?.isDeleted;
        return !isDeleted;
      },
    },
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
      group: ['details', 'shopifySync', 'seo'],
    },
    /**
     * SANITY - COLLECTION DETAILS
     */
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      group: 'details',
    },
    {
      name: 'slugProxy',
      title: 'Slug',
      type: 'proxyString',
      options: {field: 'store.slug.current'},
      group: 'details',
    },
    {
      name: 'description',
      title: 'Description',
      type: SANITY_FIELDS.RICHTEXT_LITE,
      group: 'details',
    },
    {
      name: 'image',
      title: 'Image',
      type: SANITY_FIELDS.IMAGE,
      group: 'details',
    },
    {
      name: 'extraDescription',
      title: 'Extra Description',
      type: SANITY_FIELDS.RICHTEXT_COLLECTION,
      group: 'details',
    },
    {
      name: 'collectionEssentials',
      title: 'Les indispensables',
      type: 'array',
      of: [
        {
          name: 'product',
          title: 'Produit',
          type: 'reference',
          to: [{type: SHOPIFY_DOCUMENTS.PRODUCT}],
          options: {
            disableNew: true,
            // Unable to filter products by collection as this information is stored on Shopify.
            // filter: '$collection == ^._id',
          },
        },
      ],
      group: 'details',
    },
    /**
     * SANITY - COLLECTION SEO
     */
    {
      name: 'seo',
      title: 'Seo',
      type: SANITY_FIELDS.SEO,
      group: 'seo',
    },
    /**
     * SHOPIFY SYNC STORE
     */
    // Show hero
    {
      name: 'showHero',
      title: 'Show hero',
      type: 'boolean',
      description: 'If disabled, page title will be displayed instead',
      readOnly: true,
      hidden: false,
      group: 'shopifySync',
    },
    {
      name: 'store',
      title: 'Store',
      type: 'shopifyCollection',
      description: 'Collection data from Shopify (read-only)',
      group: 'shopifySync',
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
      title: 'store.title',
      slug: 'store.slug.current',
      media: 'image.asset',
      seo: 'seo',
    },
    prepare(selection) {
      const {imageUrl, isDeleted, title, slug, media, seo} = selection;

      return {
        media: media || (
          <ShopifyDocumentStatus
            isDeleted={isDeleted}
            type="collection"
            url={imageUrl}
            title={title}
          />
        ),
        title,
        subtitle: `${slug} ${seoPreview(seo)}`,
      };
    },
  },
});
