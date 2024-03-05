import pluralize from 'pluralize-esm';
import {defineType} from 'sanity';
import ShopifyIcon from '../../../utils/shopify/components/icons/Shopify';
import ProductHiddenInput from '../../../utils/shopify/components/inputs/ProductHidden';
import {getPriceRange} from '../../../utils/shopify/getPriceRange';
import ShopifyDocumentStatus from '../../../utils/shopify/components/media/ShopifyDocumentStatus';
import {Image, ListBullets, MagnifyingGlass, PencilSimpleLine, Tag} from 'phosphor-react';
import {
  SANITY_DOCUMENTS,
  SANITY_FIELDS,
  SHOPIFY_DOCUMENTS,
  SHOPIFY_SECTIONS,
} from '../../../types/sanity.schemas';
import React from 'react';
import {seoPreview} from '../../../utils/seo.preview';
import {CustomRichTextLite} from '../../shared/objects/richTextLite';
import FlowerIcon from '../../../utils/icons/flower.svg?raw';
import DropWaterIcon from '../../../utils/icons/drop-water.svg?raw';
import ChatBubbleIcon from '../../../utils/icons/chat-bubble.svg?raw';

const GROUPS = [
  {
    name: 'details',
    title: 'Détails',
    default: true,
    icon: () => <ListBullets />,
  },
  {
    name: 'medias',
    title: 'Médias',
    icon: () => <Image />,
  },
  {
    name: 'content',
    title: 'Contenu',
    icon: () => <PencilSimpleLine />,
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
  name: SHOPIFY_DOCUMENTS.PRODUCT,
  title: 'Produit',
  type: 'document',
  icon: () => <Tag width="1em" height="1em" />,
  groups: GROUPS,
  fields: [
    // Product hidden status
    {
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
    },
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
      group: ['details', 'medias', 'content', 'shopifySync', 'seo'],
    },
    /**
     * SANITY - PRODUCT DETAILS
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
      name: 'animalTypes',
      title: 'Adapté pour',
      type: 'array',
      of: [
        {
          name: 'animalType',
          title: "Type d'animal",
          type: 'reference',
          to: [{type: SANITY_DOCUMENTS.$HORSE_ANIMAL_TYPE}],
          options: {
            disableNew: true,
          },
        },
      ],
      group: 'details',
    },
    {
      name: 'description',
      title: 'Description courte',
      type: SANITY_FIELDS.RICHTEXT_PRODUCT,
      group: 'details',
    },
    {
      name: 'activeIngredientsAndProperties',
      title: 'Actifs & propriétés',
      type: SANITY_FIELDS.RICHTEXT_PRODUCT,
      group: 'details',
      components: {
        field: (props) => CustomRichTextLite({props, icon: FlowerIcon}),
      },
    },
    {
      name: 'composition',
      title: 'Composition',
      type: SANITY_FIELDS.RICHTEXT_PRODUCT,
      group: 'details',
      components: {
        field: (props) => CustomRichTextLite({props, icon: DropWaterIcon}),
      },
    },
    {
      name: 'usageInstructions',
      title: "Conseils d'utilisation",
      type: SANITY_FIELDS.RICHTEXT_PRODUCT,
      group: 'details',
      components: {
        field: (props) => CustomRichTextLite({props, icon: ChatBubbleIcon}),
      },
    },
    /**
     * SANITY - PRODUCT MEDIAS
     */
    {
      name: 'mediaMain',
      title: 'Media Principal',
      type: SANITY_FIELDS.MEDIA,
      group: 'medias',
    },
    {
      name: 'mediaHover',
      title: 'Media de survol',
      type: SANITY_FIELDS.MEDIA,
      group: 'medias',
    },
    {
      name: 'mediaBanner',
      title: 'Bannière',
      type: SANITY_FIELDS.MEDIA,
      group: 'medias',
    },
    /**
     * SANITY - PRODUCT CONTENT
     */
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: SHOPIFY_SECTIONS.PRODUCT_LARGE_DESCRIPTION},
        {type: SHOPIFY_SECTIONS.PRODUCT_FULL_VIDEO},
        {type: SHOPIFY_SECTIONS.PRODUCT_FAQ},
        {type: SHOPIFY_SECTIONS.PRODUCT_RELATED_PRODUCTS},
      ],
      group: 'content',
    },
    /**
     * SANITY - PRODUCT SEO
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
    {
      name: 'store',
      title: 'Store',
      type: 'shopifyProduct',
      description: 'Product data from Shopify (read-only)',
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
