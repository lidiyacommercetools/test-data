import { LocalizedString } from '@commercetools-test-data/commons';
import { Generator, fake, oneOf } from '@commercetools-test-data/core';
import type { TStoreDraft } from '../types';

// https://docs.commercetools.com/api/projects/stores#storedraft

const generator = Generator<TStoreDraft>({
  fields: {
    key: fake((f) => f.lorem.slug()),
    name: fake(() => LocalizedString.random()),
    languages: [oneOf('en-US', 'de-DE', 'es-ES')],
    countries: [fake((f) => f.location.countryCode())],
    distributionChannels: null,
    supplyChannels: null,
    productSelections: null,
    custom: null,
  },
});

export default generator;
