import {defineType} from '@sanity/types';
import {StackSimple, MagnifyingGlass, SlidersHorizontal, Stack} from 'phosphor-react';
import {SANITY_DOCUMENTS, SANITY_FIELDS, SANITY_SECTIONS} from '../../../types/sanity.schemas';
import {isUniqueAcrossAllDocuments} from '../../../utils/isUniqueAcrossAllDocuments';
import type {Page} from '../../../types/horse/documents/page';
import {seoPreview} from '../../../utils/seo.preview';

export default defineType({
  name: SANITY_DOCUMENTS.$HORSE_PAGE,
  title: 'Page',
  type: 'document',
  icon: StackSimple,
  groups: [
    {name: 'content', title: 'Contenu', icon: Stack, default: true},
    {name: 'settings', title: 'Paramètres', icon: SlidersHorizontal},
  ],
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
      group: ['settings', 'content'],
    },
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      group: 'content',
    },
    {
      name: 'content',
      title: 'Contenu',
      type: SANITY_FIELDS.RICHTEXT_PAGE,
      group: 'content',
    },
    // {
    //   name: 'sections',
    //   title: 'Sections',
    //   type: 'array',
    //   of: [
    //     {type: SANITY_SECTIONS.$HORSE_HERO},
    //     {type: SANITY_SECTIONS.$HORSE_FAQ},
    //     {type: SANITY_SECTIONS.$HORSE_REUSABLE_CONTENT},
    //   ],
    //   group: 'content',
    // },
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
      name: 'seo',
      title: 'Seo',
      type: SANITY_FIELDS.SEO,
      group: 'settings',
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
