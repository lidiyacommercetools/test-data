import { Generator, fake } from '@commercetools-test-data/core';
import type { TKeyReference } from './types';

// https://docs.commercetools.com/api/types#keyreference
const generator = Generator<TKeyReference>({
  fields: {
    typeId: null,
    key: fake((f) => f.random.alphaNumeric(8)),
  },
});

export default generator;
