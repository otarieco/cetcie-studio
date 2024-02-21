import type {SanityDocument} from 'sanity';
import {SANITY_FIELDS, SANITY_SINGLETONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import {type Image, ImageProjection} from '../../shared/objects/image';
import {type LinkInternal, LinkProjection} from '../../shared/objects/linkInternal';


type CollectionsOrPagesGroup = {
  title: string;
  list: LinkInternal[];
}

export type TypeDeProduit = {
  title: string;
  image: Image;
  collection: {
    slug: string;
    image: Image;
  };
  list: (CollectionsOrPagesGroup | LinkInternal)[];
};

export const ShopProjection = /* groq */ `
  types[]{
    _key,
    title,
    image,
    list[]{
      _type,
      _key,
      _type == "link.internal" => {
        ${LinkProjection}
      },
      _type == 'group' => {
        title,
        list[]{
          _key,
          ${LinkProjection}
        }
      }
    },
  }
`;