import { Transformer } from '@commercetools-test-data/core';
import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftRest,
  TInventoryEntryDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TInventoryEntryDraft, TInventoryEntryDraft>('default', {
    buildFields: ['supplyChannel'],
  }),
  rest: Transformer<TInventoryEntryDraft, TInventoryEntryDraftRest>('rest', {
    buildFields: ['supplyChannel'],
  }),
  graphql: Transformer<TInventoryEntryDraft, TInventoryEntryDraftGraphql>(
    'graphql',
    {
      buildFields: ['supplyChannel'],
      addFields: () => ({ __typename: 'InventoryEntryDraft' }),
    }
  ),
};

export default transformers;
