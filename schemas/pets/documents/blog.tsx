import {defineType, SanityDocument, Slug} from 'sanity';
import {SANITY_DOCUMENTS, SANITY_FIELDS} from '../../../sanity.schemas';
import {Article, FlagBanner, MagnifyingGlass, PencilSimpleLine} from 'phosphor-react';
import {Figure} from '../../shared/objects/figure';
import {Seo} from '../../shared/objects/seo';
import {RichTextBlog} from '../../shared/objects/richTextBlog';

export type SanityDocumentArticleType = SanityDocument & {
  _type: SANITY_DOCUMENTS.$PETS_BLOG;
  title?: string;
  slug?: Slug;
  date?: string;
  coverImage?: Figure;
  body?: RichTextBlog;
  seo?: Seo;
};

export default defineType({
  name: SANITY_DOCUMENTS.$PETS_BLOG,
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
      type: SANITY_FIELDS.FIGURE,
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
      const {
        title,
        date,
        seo,
      }: Pick<SanityDocumentArticleType, 'title' | 'date' | 'status' | 'seo'> = selection;

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