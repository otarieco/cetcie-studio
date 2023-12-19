import {ListItemBuilder} from 'sanity/desk';
import defineStructure from '../../utils/defineStructure';
import {Info} from 'phosphor-react';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Produits')
    .schemaType('product')
    .child(
      S.documentTypeList('product')
        // .defaultLayout('detail')
        .child(async (id) =>
          S.list()
            .title('Produits')
            .canHandleIntent(
              (intentName, params) => intentName === 'edit' && params.type === 'product',
            )
            .items([
              // Details
              S.listItem()
                .title('Details')
                .icon(() => <Info width="1em" height="1em" />)
                .schemaType('product')
                .id(id)
                .child(S.document().schemaType('product').documentId(id)),
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