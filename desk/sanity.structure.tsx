import type {DefaultDocumentNodeResolver} from 'sanity/desk';
import {SANITY_DOCUMENTS, SANITY_SINGLETONS} from '../types/sanity.schemas';
import {EditView, IframeView} from '../sanity.views';
import type {StructureResolver} from 'sanity/lib/exports/desk';
import horse from './horse';
import pets from './pets';
import product from './shopify/product';
import collection from './shopify/collection';

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Categories')
    .items([
      horse(S, context),
      pets(S, context),
      S.divider(),
      product(S, context),
      collection(S, context),
    ]);

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  // Conditionally return a different configuration based on the schema type
  if (
    [...Object.values(SANITY_SINGLETONS), ...Object.values(SANITY_DOCUMENTS)].includes(
      schemaType as SANITY_SINGLETONS | SANITY_DOCUMENTS,
    )
  ) {
    return S.document().views([EditView(S), IframeView(S)]);
  }
  return S.document().views([]);
};