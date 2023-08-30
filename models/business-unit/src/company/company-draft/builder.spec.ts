/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TBusinessUnitDraft } from '../../types';
import * as BusinessUnitDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TBusinessUnitDraft, TBusinessUnitDraft>(
      'default',
      BusinessUnitDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        status: expect.any(String),
        stores: [],
        storeMode: 'Explicit',
        unitType: 'Company',
        name: expect.any(String),
        contactEmail: expect.any(String),
        associateMode: 'Explicit',
        associates: [],
        addresses: expect.any(Array),
        shippingAddresses: expect.any(Array),
        defaultShippingAddress: 0,
        billingAddresses: expect.any(Array),
        defaultBillingAddress: 0,
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TBusinessUnitDraft, TBusinessUnitDraft>(
      'rest',
      BusinessUnitDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        status: expect.any(String),
        stores: [],
        storeMode: 'Explicit',
        unitType: 'Company',
        name: expect.any(String),
        contactEmail: expect.any(String),
        associateMode: 'Explicit',
        associates: [],
        addresses: expect.any(Array),
        shippingAddresses: expect.any(Array),
        defaultShippingAddress: 0,
        billingAddresses: expect.any(Array),
        defaultBillingAddress: 0,
        custom: null,
      })
    )
  );

  // test for the graphql shape not added at this time
});