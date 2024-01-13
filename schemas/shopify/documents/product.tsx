import pluralize from 'pluralize-esm';
import {defineField, defineType} from 'sanity';
import ShopifyIcon from '../../../utils/shopify/components/icons/Shopify';
import ProductHiddenInput from '../../../utils/shopify/components/inputs/ProductHidden';
import {getPriceRange} from '../../../utils/shopify/getPriceRange';
import ShopifyDocumentStatus from '../../../utils/shopify/components/media/ShopifyDocumentStatus';
import {MagnifyingGlass, PencilSimpleLine, Tag} from 'phosphor-react';
import {SANITY_FIELDS, SHOPIFY_DOCUMENTS} from '../../../types/sanity.schemas';
import React from 'react';
import {seoPreview} from '../../../utils/seo.preview';

const GROUPS = [
  {
    name: 'editorial',
    title: 'Editorial',
    default: true,
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
  name: SHOPIFY_DOCUMENTS.PRODUCT,
  title: 'Produit',
  type: 'document',
  icon: () => <Tag width="1em" height="1em" />,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'hidden',
      type: 'string',
      components: {
        field: ProductHiddenInput,
      },
      group: GROUPS.map((group) => group.name),
      hidden: ({parent}) => {
        const isActive = parent?.store?.status === 'active';
        const isDeleted = parent?.store?.isDeleted;
        return !parent?.store || (isActive && !isDeleted);
      },
    }),
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
      group: ['editorial', 'shopifySync'],
    },
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
    // Product Editorial
    {
      name: 'editorial',
      title: 'Produit',
      type: SHOPIFY_DOCUMENTS.PRODUCT_EDITORIAL,
      group: 'editorial',
    },
    defineField({
      name: 'store',
      title: 'Shopify',
      type: 'shopifyProduct',
      description: 'Product data from Shopify (read-only)',
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
    {
      name: 'priceDesc',
      title: 'Price (Highest first)',
      by: [{field: 'store.priceRange.minVariantPrice', direction: 'desc'}],
    },
    {
      name: 'priceAsc',
      title: 'Price (Lowest first)',
      by: [{field: 'store.priceRange.minVariantPrice', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      isDeleted: 'store.isDeleted',
      options: 'store.options',
      previewImageUrl: 'store.previewImageUrl',
      priceRange: 'store.priceRange',
      status: 'store.status',
      title: 'store.title',
      slug: 'store.slug.current',
      variants: 'store.variants',
      seo: 'seo',
    },
    prepare(selection) {
      const {isDeleted, options, previewImageUrl, priceRange, status, title, variants, slug, seo} =
        selection;

      const optionCount = options?.length;
      const variantCount = variants?.length;

      let description = [
        variantCount ? pluralize('variant', variantCount, true) : 'No variants',
        optionCount ? pluralize('option', optionCount, true) : 'No options',
      ];

      let price = getPriceRange(priceRange);
      if (status !== 'active') {
        price = '(Unavailable in Shopify)';
      }
      if (isDeleted) {
        price = '(Deleted from Shopify)';
      }

      return {
        description: description.join(' / '),
        subtitle: `${slug} ${seoPreview(seo)}`,
        title,
        media: (
          <ShopifyDocumentStatus
            isActive={status === 'active'}
            isDeleted={isDeleted}
            type="product"
            url={previewImageUrl}
            title={title}
          />
        ),
      };
    },
  },
});