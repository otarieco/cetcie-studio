import type {Link} from './link';
import type {Image} from './image';
import type {NavSubSection} from './navSubSection';

export type NavSection = {
  title?: string;
  image?: Image;
  links?: (Link | NavSubSection)[];
};