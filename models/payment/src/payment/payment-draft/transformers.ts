import { Transformer } from '@commercetools-test-data/core';
import type {
  TPaymentDraft,
  TPaymentDraftGraphql,
  TPaymentDraftRest,
} from '../types';

const transformers = {
  default: Transformer<TPaymentDraft, TPaymentDraft>('default', {
    buildFields: [
      'customer',
      'amountPlanned',
      'paymentMethodInfo',
      'paymentStatus',
      'transactions',
      'custom',
    ],
  }),
  rest: Transformer<TPaymentDraft, TPaymentDraftRest>('rest', {
    buildFields: [
      'customer',
      'amountPlanned',
      'paymentMethodInfo',
      'paymentStatus',
      'transactions',
      'custom',
    ],
  }),
  graphql: Transformer<TPaymentDraft, TPaymentDraftGraphql>('graphql', {
    buildFields: [
      'customer',
      'amountPlanned',
      'paymentMethodInfo',
      'paymentStatus',
      'transactions',
      'custom',
    ],
    addFields: () => ({ __typename: 'PaymentDraft' }),
  }),
};

export default transformers;
