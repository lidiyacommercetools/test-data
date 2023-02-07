import { fake, Generator } from '@commercetools-test-data/core';
import * as Money from '@commercetools-test-data/money';
import { TCartDiscountValueAbsoluteDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvalueabsolutedraft

const generator = Generator<TCartDiscountValueAbsoluteDraft>({
  fields: {
    type: 'absolute',
    money: fake(() => [Money.random()]),
  },
});

export default generator;
