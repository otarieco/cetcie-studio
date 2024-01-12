/**
 * Data synced from Shopify and stored in Sanity
 */
export type CollectionStore = {
  title?: string;
  isDeleted?: boolean;
  sortOrder?: string;
  id?: number;
  createdAt?: string;
  gid?: string;
  slug?: {
    current?: string;
    _type: 'slug';
  };
  disjunctive?: boolean;
  imageUrl?: string;
  descriptionHtml?: string;
  rules: {
    condition?: string;
    _type?: string;
    column?: string;
    _key?: string;
    relation?: string;
  }[];
};

export const CollectionStoreProjection = `
  ...
`;