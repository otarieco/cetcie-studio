import {defineType, SanityDocument} from 'sanity';
import {FlagBanner, MagnifyingGlass, Person, Stack} from 'phosphor-react';
import {Locale} from '../../../i18n.config';
import {SANITY_FIELDS, SANITY_SECTIONS, SANITY_SINGLETONS} from '../../../sanity.schemas';
import {Seo} from '../../shared/objects/seo';
import {AboutHero} from '../sections/about/aboutHero';

export type Contact = SanityDocument & {
  _type: SANITY_SINGLETONS.$HORSE_ABOUT;
  locale?: Locale;
  hero?: AboutHero;
  sections?: any[];
  seo?: Seo;
};

export default defineType({
  name: SANITY_SINGLETONS.$HORSE_ABOUT,
  title: 'A propos',
  type: 'document',
  icon: () => <Person width="1em" height="1em" />,
  groups: [
    {name: 'hero', title: 'Hero', icon: () => <FlagBanner />, default: true},
    {name: 'sections', title: 'Sections', icon: () => <Stack />},
    {name: 'seo', title: 'Seo', icon: () => <MagnifyingGlass />},
  ],
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
      group: ['hero', 'sections', 'seo'],
    },
    {
      name: 'hero',
      title: 'Hero',
      type: SANITY_SECTIONS.$HORSE_ABOUT_HERO,
      group: 'hero',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      options: {
        sortable: false,
      },
      of: [],
      group: 'sections',
    },
    {
      name: 'seo',
      title: 'Seo',
      type: SANITY_FIELDS.SEO,
      group: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.surtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'A propos',
      };
    },
  },
});