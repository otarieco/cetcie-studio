import {defineType} from '@sanity/types';
import {Browser, MagnifyingGlass, SlidersHorizontal, Stack} from 'phosphor-react';
import {SANITY_DOCUMENTS, SANITY_FIELDS, SANITY_SECTIONS} from '../../../types/sanity.schemas';
import {isUniqueAcrossAllDocuments} from '../../../utils/isUniqueAcrossAllDocuments';
import {Page} from '../../../types/horse/documents/page';

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
      of: [{type: SANITY_SECTIONS.$HORSE_HERO}],
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
      status: 'status',
    },
    prepare(selection) {
      const {title, slug, status, seo}: Pick<Page, 'title' | 'slug' | 'status' | 'seo'> = selection;

      enum SEO_STATUS {
        VALID = 'valid',
        INVALID = 'invalid',
      }

      const EMOJIS = {
        valid: '',
        invalid: ' | SEO: 🚩',
      };

      const seoStatus = () => {
        if (!seo?.metaTitle || seo?.metaTitle?.length < 15) {
          return SEO_STATUS.INVALID;
        }

        if (!seo?.metaDescription || seo?.metaDescription?.length < 70) {
          return SEO_STATUS.INVALID;
        }

        return SEO_STATUS.VALID;
      };

      return {
        title,
        subtitle: slug?.current
          ? `${slug?.current} ${EMOJIS[seoStatus()]}`
          : `⛔️ NO SLUG ${EMOJIS[seoStatus()]}`,
      };
    },
  },
});