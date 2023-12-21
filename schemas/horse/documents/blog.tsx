import {defineType} from 'sanity';
import {SANITY_DOCUMENTS, SANITY_FIELDS} from '../../../types/sanity.schemas';
import {Article, FlagBanner, MagnifyingGlass, PencilSimpleLine} from 'phosphor-react';
import type {Blog} from '../../../types/horse/documents/blog';

export default defineType({
  name: SANITY_DOCUMENTS.$HORSE_BLOG,
  title: 'Blog',
  type: 'document',
  icon: () => <PencilSimpleLine width="1em" height="1em" />,
  groups: [
    {name: 'hero', title: 'Hero', icon: () => <FlagBanner />, default: true},
    {name: 'body', title: 'Body', icon: () => <Article />},
    {name: 'seo', title: 'Seo', icon: () => <MagnifyingGlass />},
  ],
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
      group: ['hero', 'body', 'seo'],
    },
    {
      name: 'title',
      title: 'Titre du blog',
      type: 'string',
      group: 'hero',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      group: 'hero',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
      group: 'hero',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'coverImage',
      type: SANITY_FIELDS.IMAGE,
      group: 'hero',
    },
    {
      name: 'body',
      title: 'Body',
      type: SANITY_FIELDS.RICHTEXT_BLOG,
      group: 'body',
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
      date: 'date',
      media: 'coverImage',
      status: 'status',
      seo: 'seo',
    },
    prepare(selection) {
      const {title, date, seo}: Pick<Blog, 'title' | 'date' | 'status' | 'seo'> = selection;

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
        media: selection.media,
        title,
        subtitle: date ? `le ${date} ${EMOJIS[seoStatus()]}` : `${EMOJIS[seoStatus()]}`,
      };
    },
  },
});