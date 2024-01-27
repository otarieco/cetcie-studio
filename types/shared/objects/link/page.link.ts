import type {Home as HorseHome} from '../../../horse/singletons/home';
import type {Home as PetsHome} from '../../../pets/singletons/home';
import type {About as HorseAbout} from '../../../horse/singletons/about';
import type {About as PetsAbout} from '../../../pets/singletons/about';
import type {Contact as HorseContact} from '../../../horse/singletons/contact';
import type {Contact as PetsContact} from '../../../pets/singletons/contact';
import type {Page as HorsePage} from '../../../horse/documents/page';
import type {Page as PetsPage} from '../../../pets/documents/page';
import type {Blog as HorseBlog} from '../../../horse/documents/blog';
import type {Slug} from 'sanity';
import type {Blog as PetsBlog} from '../../../pets/documents/blog';

export type PageLink = {
  _id: string;
  _type:
    | HorseHome['_type']
    | PetsHome['_type']
    | HorseAbout['_type']
    | PetsAbout['_type']
    | HorseContact['_type']
    | PetsContact['_type']
    | HorsePage['_type']
    | PetsPage['_type']
    | HorseBlog['_type']
    | PetsBlog['_type'];
  locale?: string;
  title?: string;
  slug?: Slug;
};

export const PageLinkProjection = `
  _id, 
  _type, 
  locale, 
  title, 
  slug
`;
