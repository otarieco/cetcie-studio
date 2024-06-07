import {defineType} from 'sanity';
import {FlagBanner, Person, SlidersHorizontal, Stack} from '@phosphor-icons/react';
import {SANITY_FIELDS, SANITY_SECTIONS, SANITY_SINGLETONS} from '../../../types/sanity.schemas';
import {isUniqueAcrossAllDocuments} from '../../../utils/isUniqueAcrossAllDocuments';

export default defineType({
  name: SANITY_SINGLETONS.$HORSE_ABOUT,
  title: 'A propos',
  type: 'document',
  icon: Person,
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
      readOnly: true,
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
        sortable: true,
      },
      of: [
        {type: SANITY_SECTIONS.$HORSE_ABOUT_INDEPENDENT},
        {type: SANITY_SECTIONS.$HORSE_ABOUT_COLLABORATIONS},
        {type: SANITY_SECTIONS.$HORSE_ABOUT_PORTRAIT},
        {type: SANITY_SECTIONS.$HORSE_ABOUT_QUOTE},
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
        title: 'À propos',
      };
    },
  },
});
