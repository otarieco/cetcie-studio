import {defineType} from 'sanity';
import {FlagBanner, House, MagnifyingGlass, SlidersHorizontal, Stack} from 'phosphor-react';
import {SANITY_FIELDS, SANITY_SECTIONS, SANITY_SINGLETONS} from '../../../types/sanity.schemas';

export default defineType({
  name: SANITY_SINGLETONS.$HORSE_HOME,
  title: 'Home',
  type: 'document',
  icon: () => <House width="1em" height="1em" />,
  groups: [
    {name: 'settings', title: 'Paramètres', icon: () => <SlidersHorizontal />, default: true},
    {name: 'hero', title: 'Hero', icon: () => <FlagBanner />},
    {name: 'sections', title: 'Sections', icon: () => <Stack />},
    {name: 'seo', title: 'Seo', icon: () => <MagnifyingGlass />},
  ],
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
      group: ['settings', 'hero', 'sections', 'seo'],
    },
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      group: 'settings',
    },
    {
      name: 'hero',
      title: 'Hero',
      type: SANITY_SECTIONS.$HORSE_HOME_HERO,
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
        title: 'Accueil',
      };
    },
  },
});