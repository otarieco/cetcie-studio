import {defineType} from 'sanity';
import {FlagBanner, MagnifyingGlass, Person, SlidersHorizontal, Stack} from 'phosphor-react';
import {SANITY_FIELDS, SANITY_SECTIONS, SANITY_SINGLETONS} from '../../../types/sanity.schemas';
import {isUniqueAcrossAllDocuments} from '../../../utils/isUniqueAcrossAllDocuments';

export default defineType({
  name: SANITY_SINGLETONS.$HORSE_ABOUT,
  title: 'A propos',
  type: 'document',
  icon: () => <Person width="1em" height="1em" />,
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueAcrossAllDocuments,
      },
      group: 'settings',
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