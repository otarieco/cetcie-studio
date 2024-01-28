export enum SANITY_DOCUMENTS {
  /* HORSE */
  $HORSE_PAGE = 'horse_page',
  $HORSE_BLOG = 'horse_blog',
  $HORSE_SOCIAL = 'horse_site_social',
  $HORSE_REUSABLE_CONTENT = 'horse_reusable_content',

  /* PETS */
  $PETS_PAGE = 'pets_page',
  $PETS_BLOG = 'pets_blog',
  $PETS_SOCIAL = 'pets_site_social',
}

export enum SANITY_SINGLETONS {
  /* HORSE */
  $HORSE_HOME = 'horse_page_home',
  $HORSE_ABOUT = 'horse_page_about',
  $HORSE_CONTACT = 'horse_page_contact',
  $HORSE_HEADER = 'horse_site_header',
  $HORSE_FOOTER = 'horse_site_footer',
  $HORSE_INFORMATION = 'horse_site_information',
  $HORSE_FEATURE_FLAGS = 'horse_site_feature_flags',

  /* PETS */
  $PETS_HOME = 'pets_page_home',
  $PETS_ABOUT = 'pets_page_about',
  $PETS_CONTACT = 'pets_page_contact',
  $PETS_HEADER = 'pets_site_header',
  $PETS_FOOTER = 'pets_site_footer',
  $PETS_INFORMATION = 'pets_site_information',
}

export enum SANITY_FIELDS {
  RICHTEXT_LITE = 'field.richTextLite',
  RICHTEXT_BLOG = 'field.richTextBlog',
  RICHTEXT_PRODUCT = 'field.richTextProduct',
  RICHTEXT_COLLECTION = 'field.richTextCollection',
  IMAGE = 'field.image',
  MUX_VIDEO = 'mux.video',
  MEDIA = 'field.media',
  URL = 'field.url',
  SEO = 'field.seo',
  LINK = 'field.link',
  NAV_SECTION = 'field.navSection',
  NAV_SUB_SECTION = 'field.navSubSection',
  LOCALE = 'field.locale',
}

export enum SANITY_BLOCKS {}

export enum SANITY_SECTIONS {
  /**
   * HORSE
   */

  // home
  $HORSE_HOME_HERO = 'section.horse_home_hero',
  $HORSE_HOME_ESSENTIALS = 'section.horse_home_essentials',
  $HORSE_HOME_MADE_IN_FRANCE = 'section.horse_home_made_in_france',
  $HORSE_HOME_VISIT_STORE = 'section.horse_home_visit_store',
  $HORSE_HOME_STORYTELLING = 'section.horse_home_storytelling',

  // about
  $HORSE_ABOUT_HERO = 'section.horse_about_hero',
  $HORSE_ABOUT_INDEPENDENT = 'section.horse_about_independent',
  $HORSE_ABOUT_COLLABORATIONS = 'section.horse_about_collaborations',
  $HORSE_ABOUT_PORTRAIT = 'section.horse_about_portrait',

  // contact
  $HORSE_CONTACT_HERO = 'section.horse_contact_hero',

  // pages
  $HORSE_REUSABLE_CONTENT = 'section.horse_reusable_content',
  $HORSE_HERO = 'section.horse_hero',
  $HORSE_BRAND_BENEFITS = 'section.horse_brand_benefits',

  /**
   * PETS
   */

  // home
  $PETS_HOME_HERO = 'section.pets_home_hero',

  // about
  $PETS_ABOUT_HERO = 'section.pets_about_hero',

  // contact
  $PETS_CONTACT_HERO = 'section.pets_contact_hero',

  // pages
  $PETS_HERO = 'section.pets_hero',
}

export enum SHOPIFY_DOCUMENTS {
  PRODUCT = 'product',
  PRODUCT_EDITORIAL = 'product.editorial',
  PRODUCT_VARIANT_EDITORIAL = 'product.variant_editorial',
  COLLECTION = 'collection',
  COLLECTION_EDITORIAL = 'collection.editorial',
}

export enum SHOPIFY_SECTIONS {
  // products
  PRODUCT_ADVICE = 'section.product_advice',
  PRODUCT_RELATED_PRODUCTS = 'section.product_related_products',
  PRODUCT_LARGE_DESCRIPTION = 'section.product_large_description',
  PRODUCT_FULL_VIDEO = 'section.product_full_video',
}
