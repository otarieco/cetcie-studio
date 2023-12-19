import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';
import {media} from 'sanity-plugin-media';
import {SANITY_SINGLETONS} from './sanity.schemas';
import {muxInput} from 'sanity-plugin-mux-input';
import {plausible} from './plugins/plausible';
import './utils/richText.style.css';
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array';
import {Horse} from 'phosphor-react';
import {defaultDocumentNode, structure} from './desk/sanity.structure';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

const singletonTypes = new Set(Object.values(SANITY_SINGLETONS));
export default defineConfig({
  name: 'default',
  title: 'Compagnons & Cie',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  icon: Horse,
  plugins: [
    deskTool({structure, defaultDocumentNode}),
    // documentInternationalization({
    //   supportedLanguages: i18n.locales.map((locale) => ({
    //     id: locale,
    //     title: (
    //       <span>
    //         {locale.toLocaleUpperCase()} <Flag code={localesFlags[locale]} height="13" />
    //       </span>
    //     ) as unknown as string,
    //   })),
    //   schemaTypes: [...Object.values(SANITY_DOCUMENTS), ...Object.values(SANITY_SINGLETONS)],
    //   languageField: 'locale',
    // }),
    media(),
    muxInput(),
    visionTool(),
    imageHotspotArrayPlugin(),
    plausible({
      website: process.env.SANITY_STUDIO_PLAUSIBLE_WEBSITE!,
      auth: process.env.SANITY_STUDIO_PLAUSIBLE_AUTH!,
    }),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType as SANITY_SINGLETONS)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    actions: (input, context) =>
      singletonTypes.has(context.schemaType as SANITY_SINGLETONS)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
});