import {defineType} from '@sanity/types';
import {Browser, MagnifyingGlass, SlidersHorizontal, Stack} from 'phosphor-react';
import {SANITY_DOCUMENTS, SANITY_FIELDS, SANITY_SECTIONS} from '../../../types/sanity.schemas';
import {isUniqueAcrossAllDocuments} from '../../../utils/isUniqueAcrossAllDocuments';
import type {Page} from '../../../types/horse/documents/page';
import {seoPreview} from '../../../utils/seo.preview';

export default defineType({
  name: SANITY_DOCUMENTS.$HORSE_PAGE,
  title: 'Page',
  type: 'document',
  icon: () => <Browser width="1em" height="1em" />,
  groups: [
    {name: 'settings', title: 'Paramètres', icon: () => <SlidersHorizontal />, default: true},
    {name: 'sections', title: 'Sections', icon: () => <Stack />},
    {name: 'seo', title: 'Seo', icon: () => <MagnifyingGlass />},
  ],
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
      group: ['settings', 'sections', 'seo'],
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
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: SANITY_SECTIONS.$HORSE_HERO},
        {type: SANITY_SECTIONS.$HORSE_FAQ},
        {type: SANITY_SECTIONS.$HORSE_REUSABLE_CONTENT},
      ],
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
      title: 'title',
      slug: 'slug',
      seo: 'seo',
    },
    prepare(selection) {
      const {title, slug, seo}: Pick<Page, 'title' | 'slug' | 'seo'> = selection;

      return {
        title,
        subtitle: slug?.current
          ? `${slug?.current} ${seoPreview(seo)}`
          : `⛔️ NO SLUG ${seoPreview(seo)}`,
      };
    },
  },
});
