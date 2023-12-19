import type {DefaultDocumentNodeResolver} from 'sanity/desk'
import {SANITY_DOCUMENTS, SANITY_SINGLETONS} from './sanity.schemas'
import {EditView, IframeView} from './sanity.views'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  // Conditionally return a different configuration based on the schema type
  if (
    [...Object.values(SANITY_SINGLETONS), ...Object.values(SANITY_DOCUMENTS)].includes(
      schemaType as SANITY_SINGLETONS | SANITY_DOCUMENTS,
    )
  ) {
    return S.document().views([EditView(S), IframeView(S)])
  }
  return S.document().views([])
}