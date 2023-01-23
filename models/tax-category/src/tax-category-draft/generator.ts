import { Generator, fake } from '@commercetools-test-data/core';
import type { TTaxCategoryDraft } from '../types';
import { TaxRateDraft } from '@commercetools-test-data/tax-rate';

// https://docs.commercetools.com/api/projects/taxCategories#taxcategorydraft

const generator = Generator<TTaxCategoryDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    name: fake((f) => f.lorem.words(2)),
    description: fake((f) => f.lorem.sentence()),
    rates: fake(() => [TaxRateDraft.random()]),
  },
});

export default generator;
