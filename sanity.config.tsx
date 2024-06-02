import {theme} from 'https://themer.sanity.build/api/hues?default=333335;600&primary=d2c4bd;300&transparent=333335;600&positive=43d675;300&caution=fbd024;200&lightest=f9f9fa&darkest=111';
import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';
import {media} from 'sanity-plugin-media';
import {SANITY_DOCUMENTS, SANITY_SINGLETONS, SHOPIFY_DOCUMENTS} from './types/sanity.schemas';
import {muxInput} from 'sanity-plugin-mux-input';
import {plausible} from './plugins/plausible';
import './utils/richText.style.css';
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array';
import {Horse} from 'phosphor-react';
import {defaultDocumentNode, structure} from './desk/sanity.structure';
import {documentInternationalization} from '@sanity/document-internationalization';
import {i18n, localesFlags} from './i18n.config';
import Flag from 'react-world-flags';
import {draftReviewPluginV3} from 'sanity-plugin-draft-review-v3';
import {visualOptions} from 'sanity-plugin-visual-options';





const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

const langues: {
  [key: string]: string;
} = {
  fr: 'Français',
  en: 'Anglais',
};

const singletonTypes = new Set(Object.values(SANITY_SINGLETONS));

export default defineConfig({
  name: 'default',
  title: 'Compagnons & Cie',
  theme,
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  icon: Horse,
  scheduledPublishing: {
    enabled: false,
  },
  plugins: [
    structureTool({structure, defaultDocumentNode}),
    documentInternationalization({
      supportedLanguages: i18n.locales.map((locale) => ({
        id: locale,
        title: langues[locale],
        // title: (
        //   <span>
        //     {locale.toLocaleUpperCase()} <Flag code={localesFlags[locale]} height="13" />
        //   </span>
        // ) as unknown as string,
      })),
      schemaTypes: [
        ...Object.values(SANITY_DOCUMENTS),
        ...Object.values(SANITY_SINGLETONS),
        SHOPIFY_DOCUMENTS.COLLECTION,
        SHOPIFY_DOCUMENTS.PRODUCT,
      ],
      languageField: 'locale',
    }),
    media(),
    muxInput({mp4_support: 'standard'}),
    draftReviewPluginV3({}),
    visionTool(),
    imageHotspotArrayPlugin(),
    plausible({
      website: process.env.SANITY_STUDIO_PLAUSIBLE_WEBSITE!,
      auth: process.env.SANITY_STUDIO_PLAUSIBLE_AUTH!,
    }),
    visualOptions(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => {
      // const schemaTypesWithLocale = new Set(
      //   templates.map(({schemaType, value}) => value?.locale && schemaType).filter(Boolean),
      // );

      return templates.filter(
        ({schemaType, value}) =>
          !singletonTypes.has(schemaType as SANITY_SINGLETONS) &&
          !value?.locale &&
          !['media.tag', 'translation.metadata'].includes(schemaType),
      );
      // .map((template) => ({
      //   ...template,
      //   value: schemaTypesWithLocale.has(template.schemaType)
      //     ? {
      //         locale: i18n.defaultLocale,
      //         ...(template.value || {}),
      //       }
      //     : template.value,
      // }))
    },
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    actions: (input, context) =>
      singletonTypes.has(context.schemaType as SANITY_SINGLETONS)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
});
