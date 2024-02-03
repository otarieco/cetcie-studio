import type {SanityDocument} from 'sanity';
import type {Locale} from '../../../shared/locale';
import {type Seo, SeoProjection} from '../../../shared/objects/seo';
import {type ProductStore, ProductStoreProjection} from './productStore';
import {type RichTextProduct, RichTextProductProjection} from '../../../shared/objects/richTextProduct';
import {type Media, MediaProjection} from '../../../shared/objects/media';
import {type RichTextLite, RichTextLiteProjection} from '../../../shared/objects/richTextLite';
import {type RelatedProducts, RelatedProductsProjection} from '../../sections/product/relatedProducts';
import {type LargeDescription, LargeDescriptionProjection} from '../../sections/product/largeDescription';
import {type FullVideo, FullVideoProjection} from '../../sections/product/fullVideo';
import {SHOPIFY_SECTIONS} from '../../../sanity.schemas';
import {type AnimalType as HorseAnimalType, AnimalTypeProjection} from '../../../horse/documents/animalType';
import {type ProductFaq, ProductFaqProjection} from '../../sections/product/productFaq';

/**
 * CollectionRaw is the collection type stored in Sanity
 * Before his transformation into Collection type
 */
export type RawProduct = SanityDocument & {
  locale?: Locale;

  /* Details */
  title?: string;
  description?: RichTextProduct;
  activeIngredientsAndProperties?: RichTextLite;
  composition?: RichTextLite;
  usageInstructions?: RichTextLite;
  animalTypes: HorseAnimalType[];

  /* Medias */
  mediaMain?: Media;
  mediaHover?: Media;
  mediaBanner?: Media;

  /* Content */
  sections?: (LargeDescription | FullVideo | ProductFaq | RelatedProducts)[];

  /* Shopify */
  store?: ProductStore;

  /* Seo */
  seo?: Seo;
};

/**
 * RawProductProjection fetch for RawCollection format
 */
export const RawProductProjection = `
  ...,
  
  // Details 
  description[]{${RichTextProductProjection}},
  animalTypes[]->{${AnimalTypeProjection}},
  activeIngredientsAndProperties[]{${RichTextLiteProjection}},
  composition[]{${RichTextLiteProjection}},
  usageInstructions[]{${RichTextLiteProjection}},
  
  // Medias
  mediaMain{${MediaProjection}},
  mediaHover{${MediaProjection}},
  mediaBanner{${MediaProjection}},
  
  // Content
  sections[]{
    _type == "${SHOPIFY_SECTIONS.PRODUCT_LARGE_DESCRIPTION}" => {
      ${LargeDescriptionProjection}
    },
    _type == "${SHOPIFY_SECTIONS.PRODUCT_FULL_VIDEO}" => {
      ${FullVideoProjection}
    },
    _type == "${SHOPIFY_SECTIONS.PRODUCT_FAQ}" => {
      ${ProductFaqProjection}
    },
    _type == "${SHOPIFY_SECTIONS.PRODUCT_RELATED_PRODUCTS}" => {
      ${RelatedProductsProjection}
    },
  },
  
  // Shopify
  store{${ProductStoreProjection}},
  
  // Seo
  seo{${SeoProjection}},
`;
