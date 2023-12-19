import {StructureResolver} from 'sanity/desk';
import horse from './horse';
import pets from './pets';

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Categories')
    .items([horse(S, context), pets(S, context), S.divider()]);