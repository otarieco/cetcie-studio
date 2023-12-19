// env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SANITY_STUDIO_PROJECT_ID: string;
  readonly SANITY_STUDIO_DATASET: string;
  readonly SANITY_STUDIO_PREVIEW_SECRET: string;
  readonly SANITY_STUDIO_PREVIEW_URL: string;
  readonly SANITY_STUDIO_PLAUSIBLE_WEBSITE: string;
  readonly SANITY_STUDIO_PLAUSIBLE_AUTH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}