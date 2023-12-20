import type {SanityDocument, Slug} from 'sanity';

export type ResolveProductionUrlProps = SanityDocument & {
  slug: Slug;
};

// Return full preview URL
export const resolveProductionUrl = (document: ResolveProductionUrlProps) =>
  'http://localhost:5173';