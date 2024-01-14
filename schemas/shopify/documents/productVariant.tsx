import React from 'react';
import {defineField, defineType} from 'sanity';
import ShopifyIcon from '../../../utils/shopify/components/icons/Shopify';
import ProductVariantHiddenInput from '../../../utils/shopify/components/inputs/ProductVariantHidden';
import ShopifyDocumentStatus from '../../../utils/shopify/components/media/ShopifyDocumentStatus';
import {PencilSimpleLine, Stack} from 'phosphor-react';
import {SHOPIFY_DOCUMENTS} from '../../../types/sanity.schemas';

export default defineType({
  name: 'productVariant',
  title: 'Product variant',
  type: 'document',
  icon: () => <Stack width="1em" height="1em" />,
  groups: [
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
    // Product Editorial
    {
      name: 'editorial',
      title: 'Produit',
      type: SHOPIFY_DOCUMENTS.PRODUCT_VARIANT_EDITORIAL,
      group: 'editorial',
    },
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