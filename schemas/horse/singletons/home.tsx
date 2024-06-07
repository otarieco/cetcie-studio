import {defineType} from 'sanity';
import {FlagBanner, House, MagnifyingGlass, SlidersHorizontal, Stack} from '@phosphor-icons/react';
import {SANITY_FIELDS, SANITY_SECTIONS, SANITY_SINGLETONS} from '../../../types/sanity.schemas';

export default defineType({
  name: SANITY_SINGLETONS.$HORSE_HOME,
  title: 'Home',
  type: 'document',
  icon: House,
  groups: [
    {name: 'hero', title: 'Hero', icon: () => <FlagBanner />, default: true},
    {name: 'content', title: 'Contenu', icon: () => <Stack />},
    {name: 'settings', title: 'Paramètres', icon: () => <SlidersHorizontal />},
  ],
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
      group: ['hero', 'content', 'settings'],
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
        sortable: true,
      },
      of: [
        {type: SANITY_SECTIONS.$HORSE_HOME_ESSENTIALS},
        {type: SANITY_SECTIONS.$HORSE_HOME_MADE_IN_FRANCE},
        {type: SANITY_SECTIONS.$HORSE_HOME_VISIT_STORE},
        {type: SANITY_SECTIONS.$HORSE_HOME_STORYTELLING},
        {type: SANITY_SECTIONS.$HORSE_REUSABLE_CONTENT},
      ],
      group: 'content',
    },
    {
      name: 'seo',
      title: 'Seo',
      type: SANITY_FIELDS.SEO,
      group: 'settings',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Accueil',
      };
    },
  },
});
