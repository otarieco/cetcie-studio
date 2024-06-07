import {ListItemBuilder} from 'sanity/desk';
import defineStructure from '../../utils/defineStructure';
import {Info} from '@phosphor-icons/react';
import {SHOPIFY_DOCUMENTS} from '../../types/sanity.schemas';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Produits')
    .schemaType(SHOPIFY_DOCUMENTS.PRODUCT)
    .child(
      S.documentTypeList(SHOPIFY_DOCUMENTS.PRODUCT)
        // .defaultLayout('detail')
        .child(async (id) =>
          S.list()
            .title('Produits')
            .canHandleIntent(
              (intentName, params) =>
                intentName === 'edit' && params.type === SHOPIFY_DOCUMENTS.PRODUCT,
            )
            .items([
              // Details
              S.listItem()
                .title('Details')
                .icon(() => <Info width="1em" height="1em" />)
                .schemaType(SHOPIFY_DOCUMENTS.PRODUCT)
                .id(id)
                .child(S.document().schemaType(SHOPIFY_DOCUMENTS.PRODUCT).documentId(id)),
              // Product variants
              S.listItem()
                .title('Variants')
                .schemaType('productVariant')
                .child(
                  S.documentList()
                    .title('Variants')
                    .schemaType('productVariant')
                    .filter(
                      `
                      _type == "productVariant"
                      && store.productId == $productId
                    `,
                    )
                    .params({
                      productId: Number(id.replace('shopifyProduct-', '')),
                    })
                    .canHandleIntent(
                      (intentName, params) =>
                        intentName === 'edit' && params.type === 'productVariant',
                    ),
                ),
            ]),
        ),
    ),
);