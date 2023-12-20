import {defineType} from 'sanity';
import {FlagBanner, House, MagnifyingGlass, Stack} from 'phosphor-react';
import {SANITY_FIELDS, SANITY_SECTIONS, SANITY_SINGLETONS} from '../../../types/sanity.schemas';

export default defineType({
  name: SANITY_SINGLETONS.$PETS_HOME,
  title: 'Home',
  type: 'document',
  icon: () => <House width="1em" height="1em" />,
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
      type: SANITY_SECTIONS.$PETS_HOME_HERO,
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