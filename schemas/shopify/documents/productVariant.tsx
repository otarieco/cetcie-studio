import React from 'react';
import {defineType} from 'sanity';
import ShopifyIcon from '../../../utils/shopify/components/icons/Shopify';
import ProductVariantHiddenInput from '../../../utils/shopify/components/inputs/ProductVariantHidden';
import ShopifyDocumentStatus from '../../../utils/shopify/components/media/ShopifyDocumentStatus';
import {Image, Stack} from 'phosphor-react';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';

export default defineType({
  name: 'productVariant',
  title: 'Product variant',
  type: 'document',
  icon: () => <Stack width="1em" height="1em" />,
  groups: [
    {
      name: 'medias',
      title: 'Médias',
      icon: () => <Image />,
      default: true,
    },
    {
      name: 'shopifySync',
      title: 'Shopify',
      icon: ShopifyIcon,
    },
  ],
  fields: [
    // Product variant hidden status
    {
      name: 'hidden',
      type: 'string',
      components: {
        field: ProductVariantHiddenInput,
      },
      hidden: ({parent}) => {
        const isDeleted = parent?.store?.isDeleted;
        return !isDeleted;
      },
    },
    /**
     * SANITY - PRODUCT VARIRANT MEDIAS
     */
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: SANITY_FIELDS.IMAGE}],
      group: 'medias',
    },
    /**
     * SHOPIFY SYNC STORE
     */
    {
      name: 'store',
      title: 'Store',
      description: 'Variant data from Shopify (read-only)',
      type: 'shopifyProductVariant',
      group: 'shopifySync',
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
