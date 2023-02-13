/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TDiscountCodeDraft, TDiscountCodeDraftGraphql } from '../types';
import * as DiscountCodeDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TDiscountCodeDraft, TDiscountCodeDraft>(
      'default',
      DiscountCodeDraft.random(),
      expect.objectContaining({
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        code: expect.any(String),
        cartDiscounts: expect.arrayContaining([]),
        cartPredicate: '1=1',
        isActive: expect.any(Boolean),
        maxApplications: expect.any(Number),
        maxApplicationsPerCustomer: expect.any(Number),
        groups: expect.arrayContaining([]),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TDiscountCodeDraft, TDiscountCodeDraft>(
      'rest',
      DiscountCodeDraft.random(),
      expect.objectContaining({
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        code: expect.any(String),
        cartDiscounts: expect.arrayContaining([]),
        cartPredicate: '1=1',
        isActive: expect.any(Boolean),
        maxApplications: expect.any(Number),
        maxApplicationsPerCustomer: expect.any(Number),
        groups: expect.arrayContaining([]),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TDiscountCodeDraft, TDiscountCodeDraftGraphql>(
      'graphql',
      DiscountCodeDraft.random(),
      expect.objectContaining({
        name: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        description: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        code: expect.any(String),
        cartDiscounts: expect.arrayContaining([]),
        cartPredicate: '1=1',
        isActive: expect.any(Boolean),
        maxApplications: expect.any(Number),
        maxApplicationsPerCustomer: expect.any(Number),
        groups: expect.arrayContaining([]),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        custom: null,
        __typename: 'DiscountCodeDraft',
      })
    )
  );
});
