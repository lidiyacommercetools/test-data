import {
  ClientLogging,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { fake, Generator, sequence } from '@commercetools-test-data/core';
import * as ProductDiscountValueAbsolute from '@commercetools-test-data/product-discount-value-absolute';
import * as ProductDiscountValueExternal from '@commercetools-test-data/product-discount-value-external';
import * as ProductDiscountValueRelative from '@commercetools-test-data/product-discount-value-relative';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TProductDiscount } from './types';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscount

// eslint-disable-next-line
const [getValidFrom, _, getValidUntil] = createRelatedDates();
const [getCreatedAt, getLastModifiedAt] = createRelatedDates();

const generator = Generator<TProductDiscount>({
  fields: {
    id: fake((f) => f.random.alphaNumeric(8)),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    value: fake((f) =>
      f.helpers.arrayElement([
        ProductDiscountValueAbsolute.random(),
        ProductDiscountValueRelative.random(),
        ProductDiscountValueExternal.random(),
      ])
    ),
    predicate: '1=1',
    // Faker `min` and `max` bounds are inclusive, we need between 0 and 1
    sortOrder: fake((f) =>
      String(f.datatype.number({ min: 0.00001, max: 0.99999 }))
    ),
    isActive: fake((f) => f.datatype.boolean()),
    references: [],
    validFrom: fake(getValidFrom),
    validUntil: fake(getValidUntil),
    createdAt: fake(getCreatedAt),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getLastModifiedAt),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
