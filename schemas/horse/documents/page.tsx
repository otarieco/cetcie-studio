import {defineType} from '@sanity/types';
import {StackSimple, MagnifyingGlass, SlidersHorizontal, Stack} from 'phosphor-react';
import {SANITY_DOCUMENTS, SANITY_FIELDS, SANITY_SECTIONS} from '../../../types/sanity.schemas';
import {isUniqueAcrossAllDocuments} from '../../../utils/isUniqueAcrossAllDocuments';
import type {Page} from '../../../types/horse/documents/page';
import {seoPreview} from '../../../utils/seo.preview';
import {SectionsArrayInput} from '@tinloof/sanity-studio';


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
      validation: (Rule: any) => Rule.required().error('Veuillez défnir une langue.'),
      initialValue: 'fr'
    },
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      group: 'content',
    },
    {
      name: 'type',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'Landing page', value: 'landing'},
          {title: 'Contenu texte simple', value: 'content'},
        ],
      },
      initialValue: 'landing',
      group: 'content',
    },
    {
      name: 'content',
      title: 'Contenu',
      type: SANITY_FIELDS.RICHTEXT_PAGE,
      group: 'content',
      hidden: ({document}) => document?.type !== 'content',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'landing.hero'},
        {type: 'landing.imageEtTexte'},
        {type: 'landing.trioProduits'},
      ],
      group: 'content',
      components: {
        input: SectionsArrayInput,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueAcrossAllDocuments,
      },
      group: 'settings',
      validation: (Rule: any) =>
        Rule.custom((slug: {current: string} | undefined) => {
          if (!slug?.current) return 'Slug obligatoire, veuillez en créer un.';
          if (!/^([a-z][a-z0-9-\/]*[a-z0-9])$/.test(slug.current))
            return 'Erreur de format du slug. Peut contenir uniquement des lettres, des chiffres et des tirets. Et ne peut commencer ni se terminer par un tiret.';
          return true;
        }),
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
