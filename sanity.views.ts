import type {StructureBuilder} from 'sanity/desk';
import {Eye, PencilSimple} from '@phosphor-icons/react';
import {resolveProductionUrl, type ResolveProductionUrlProps} from './utils/resolveProductionUrl';
import {Iframe} from 'sanity-plugin-iframe-pane';

export const EditView = (S: StructureBuilder) => S.view.form().icon(PencilSimple);

export const IframeView = (S: StructureBuilder) =>
  S.view
    .component(Iframe)
    .options({
      url: (document: ResolveProductionUrlProps) => resolveProductionUrl(document),
      reload: {
        button: true,
      },
    })
    .title('Preview')
    .icon(Eye);