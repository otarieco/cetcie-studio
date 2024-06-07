import {defineType} from 'sanity';
import {PawPrint, Storefront, SquareLogo, SquareHalf} from '@phosphor-icons/react';
import {SHOPIFY_DOCUMENTS, SANITY_FIELDS, SANITY_SINGLETONS} from '../../../types/sanity.schemas';
import {noDuplicateRefs} from 'sanity-pills';

export default defineType({
  name: SANITY_SINGLETONS.$HORSE_SHOP,
  title: 'Shop',
  type: 'document',
  icon: Storefront,
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
    },
    {
      name: 'types',
      title: 'Types de produits',
      type: 'array',
      of: [
        {
          name: 'list',
          title: 'Type de produits',
          type: 'object',
          icon: PawPrint,
          fields: [
            {
              title: 'Titre',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Collection',
              name: 'collection',
              description:
                'Collection principale pour ce type de produits. Ajoute un lien "Tous les produits" pointant vers cette collection.',
              type: 'reference',
              to: [
                {
                  type: SHOPIFY_DOCUMENTS.COLLECTION,
                },
              ],
              options: {
                disableNew: true,
              },
            },
            {
              name: 'image',
              type: SANITY_FIELDS.IMAGE,
              options: {
                collapsible: true,
                collapsed: true,
              }
            },
            {
              name: 'list',
              title: 'Collections ou pages',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'group',
                  title: 'Groupe de collections',
                  icon: SquareHalf,
                  fields: [
                    {
                      name: 'title',
                      title: 'Titre',
                      type: 'string',
                    },
                    {
                      name: 'list',
                      title: 'Collections / Pages',
                      type: 'array',
                      of: [
                        {
                          type: SANITY_FIELDS.LINK_INTERNAL,
                          title: 'Collection ou page',
                          icon: SquareLogo,
                        },
                      ],
                    },
                  ],
                },
                {type: SANITY_FIELDS.LINK_INTERNAL, icon: SquareLogo},
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Shop',
      };
    },
  },
});
