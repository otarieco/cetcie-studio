import type {SanityDocument} from 'sanity';
import {SANITY_FIELDS, SANITY_SINGLETONS} from '../../sanity.schemas';
import type {Locale} from '../../shared/locale';
import {type Image, ImageProjection} from '../../shared/objects/image';
import {type LinkInternal, LinkProjection} from '../../shared/objects/linkInternal';


type CollectionsOrPagesGroup = {
  _type: 'group';
  _key: string;
  title: string;
  list: LinkInternal[];
}

export type TypeDeProduit = {
  _key: string;
  title: string;
  image: Image;
  collection: {
    slug: string;
    image: Image;
  };
  list: (CollectionsOrPagesGroup | LinkInternal)[];
};

export type Shop = {
  types?: TypeDeProduit[];
}

export const ShopProjection = /* groq */ `
  types[]{
    _key,
    title,
    image{${ImageProjection}},
    collection->{
      "slug": coalesce(slug.current, store.slug.current),
      image{${ImageProjection}}
    },
    list[]{
      _type == "link.internal" => {
        ${LinkProjection}
      },
      _type == 'group' => {
        _type,
        _key,
        title,
        list[]{
          _key,
          ${LinkProjection}
        }
      }
    },
  }
`;