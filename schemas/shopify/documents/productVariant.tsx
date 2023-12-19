import React from 'react';
import {defineField, defineType} from 'sanity';
import ShopifyIcon from '../../../utils/shopify/components/icons/Shopify';
import ProductVariantHiddenInput from '../../../utils/shopify/components/inputs/ProductVariantHidden';
import ShopifyDocumentStatus from '../../../utils/shopify/components/media/ShopifyDocumentStatus';
import {Stack} from 'phosphor-react';

export default defineType({
  name: 'productVariant',
  title: 'Product variant',
  type: 'document',
  icon: () => <Stack width="1em" height="1em" />,
  groups: [
    {
      name: 'shopifySync',
      title: 'Shopify sync',
      icon: ShopifyIcon,
    },
  ],
  fields: [
    // Product variant hidden status
    defineField({
      name: 'hidden',
      type: 'string',
      components: {
        field: ProductVariantHiddenInput,
      },
      hidden: ({parent}) => {
        const isDeleted = parent?.store?.isDeleted;

        return !isDeleted;
      },
    }),
    // Title (proxy)
    defineField({
      title: 'Title',
      name: 'titleProxy',
      type: 'proxyString',
      options: {field: 'store.title'},
    }),
    // Shopify product variant
    defineField({
      name: 'store',
      title: 'Shopify',
      description: 'Variant data from Shopify (read-only)',
      type: 'shopifyProductVariant',
      group: 'shopifySync',
    }),
  ],
  preview: {
    select: {
      isDeleted: 'store.isDeleted',
      previewImageUrl: 'store.previewImageUrl',
      sku: 'store.sku',
      status: 'store.status',
      title: 'store.title',
    },
    prepare(selection) {
      const {isDeleted, previewImageUrl, sku, status, title} = selection;

      return {
        media: (
          <ShopifyDocumentStatus
            isActive={status === 'active'}
            isDeleted={isDeleted}
            type="productVariant"
            url={previewImageUrl}
            title={title}
          />
        ),
        subtitle: sku,
        title,
      };
    },
  },
});