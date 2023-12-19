import type {DefineSchemaType} from '@sanity/types';

// @ts-ignore
const modules = import.meta.glob(['./shared/**', './horse/**', './pets/**', './shopify/**'], {
  eager: true,
  import: 'default',
});

export const schemaTypes = Object.values(modules) as DefineSchemaType<any, any>[];