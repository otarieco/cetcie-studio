export enum SANITY_DOCUMENTS {
  /* HORSE */
  $HORSE_PAGE = 'horse_page',
  $HORSE_BLOG = 'horse_blog',
  $HORSE_SOCIAL = 'horse_site_social',

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
  RICHTEXT_REGULAR = 'field.richTextRegular',
  RICHTEXT_COMPLEX = 'field.richTextComplex',
  RICHTEXT_BLOG = 'field.richTextBlog',
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

  // about
  $HORSE_ABOUT_HERO = 'section.horse_about_hero',

  // contact
  $HORSE_CONTACT_HERO = 'section.horse_contact_hero',

  // pages
  $HORSE_HERO = 'section.horse_hero',

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
  COLLECTION = 'collection',
  COLLECTION_EDITORIAL = 'collection.editorial',
  PRODUCT_EDITORIAL = 'product.editorial',
}