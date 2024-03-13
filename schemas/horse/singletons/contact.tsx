import {defineType} from 'sanity';
import {
  FlagBanner,
  PaperPlaneTilt,
  SlidersHorizontal,
  Stack,
} from 'phosphor-react';
import {SANITY_FIELDS, SANITY_SECTIONS, SANITY_SINGLETONS} from '../../../types/sanity.schemas';
import {isUniqueAcrossAllDocuments} from '../../../utils/isUniqueAcrossAllDocuments';

export default defineType({
  name: SANITY_SINGLETONS.$HORSE_CONTACT,
  title: 'Contact',
  type: 'document',
  icon: () => <PaperPlaneTilt width="1em" height="1em" />,
  groups: [
    {name: 'content', title: 'Contenu', icon: () => <Stack />, default: true},
    {name: 'settings', title: 'Paramètres', icon: () => <SlidersHorizontal />},
  ],
  fields: [
    {
      name: 'locale',
      type: SANITY_FIELDS.LOCALE,
      group: ['content', 'settings'],
    },
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      group: 'content',
    },
    {
      name: 'intro',
      title: 'Intro',
      description: 'Texte introductif',
      type: 'text',
      rows: 3,
      group: 'content',
    },
    {
      name: 'media',
      title: 'Image / Vidéo',
      type: SANITY_FIELDS.MEDIA,
      group: 'content',
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
      name: 'seo',
      title: 'Seo',
      type: SANITY_FIELDS.SEO,
      group: 'settings',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact',
      };
    },
  },
});