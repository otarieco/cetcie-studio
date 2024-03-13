import {defineType} from 'sanity';
import {Scroll, SlidersHorizontal, Stack} from 'phosphor-react';
import {SANITY_FIELDS, SANITY_SECTIONS, SANITY_SINGLETONS} from '../../../types/sanity.schemas';
import {isUniqueAcrossAllDocuments} from '../../../utils/isUniqueAcrossAllDocuments';

export default defineType({
  name: SANITY_SINGLETONS.$HORSE_BIOGRAPHY,
  title: 'Notre histoire',
  type: 'document',
  icon: () => <Scroll width="1em" height="1em" />,
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
      name: 'sections',
      title: 'Sections',
      type: 'array',
      options: {
        sortable: true,
      },
      of: [
        {type: SANITY_SECTIONS.$HORSE_BIOGRAPHY_FULL_SCREEN_IMAGE},
        {type: SANITY_SECTIONS.$HORSE_BIOGRAPHY_LONG_TEXT},
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
        title: 'Notre histoire',
      };
    },
  },
});
