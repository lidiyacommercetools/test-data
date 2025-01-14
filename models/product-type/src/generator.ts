import * as AttributeDefinition from '@commercetools-test-data/attribute-definition';
import { ClientLogging } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { TProductType } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/productTypes#product-types

const generator = Generator<TProductType>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: fake((f) => f.number.int()),
    key: fake((f) => f.lorem.slug()),
    name: fake((f) => f.person.fullName()),
    description: fake((f) => f.lorem.words()),
    attributes: fake(() => [AttributeDefinition.random()]),
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
