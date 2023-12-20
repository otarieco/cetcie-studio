import {Link} from './link';
import {Image} from './image';
import {NavSubSection} from './navSubSection';

export type NavSection = {
  title?: string;
  image?: Image;
  links?: (Link | NavSubSection)[];
};