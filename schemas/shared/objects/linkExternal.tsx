import {defineType} from 'sanity';
import {SANITY_FIELDS} from '../../../types/sanity.schemas';
import {Link as LinkIcon} from 'phosphor-react';

export default defineType({
  name: SANITY_FIELDS.LINK_EXTERNAL,
  title: 'Lien',
  type: 'object',
  icon: LinkIcon,
  fields: [
    {
      name: 'title',
      title: 'Titre',
      description: 'Texte du lien',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      description: 'Url externe au site',
      type: SANITY_FIELDS.URL,
    },
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare(selection: any) {
      const {title, url} = selection;
      return {
        title,
        subtitle: url,
        media: LinkIcon,
      };
    },
  },
});