import { Transformer } from '@commercetools-test-data/core';
import type {
  TCartDiscountLineItemsTargetDraft,
  TCartDiscountLineItemsTargetDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TCartDiscountLineItemsTargetDraft,
    TCartDiscountLineItemsTargetDraft
  >('default', {}),
  graphql: Transformer<
    TCartDiscountLineItemsTargetDraft,
    TCartDiscountLineItemsTargetDraftGraphql
  >('graphql', {
    replaceFields: ({ fields }) => ({
      lineItems: {
        ...fields,
        __typename: 'LineItemsTargetInput',
      },
      __typename: 'CartDiscountTargetInput',
    }),
  }),
};

export default transformers;
