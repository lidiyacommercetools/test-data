/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TPaymentMethodInfoDraft,
  TPaymentMethodInfoDraftGraphQL,
} from '../types';
import * as PaymentMethodInfoInput from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TPaymentMethodInfoDraft, TPaymentMethodInfoDraft>(
      'default',
      PaymentMethodInfoInput.random(),
      expect.objectContaining({
        paymentInterface: null,
        method: null,
        name: expect.objectContaining({
          en: expect.any(String),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TPaymentMethodInfoDraft,
      TPaymentMethodInfoDraftGraphQL
    >(
      'graphql',
      PaymentMethodInfoInput.random(),
      expect.objectContaining({
        __typename: 'PaymentMethodInfoInput',
        paymentInterface: null,
        method: null,
        name: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
          }),
        ]),
      })
    )
  );
});
