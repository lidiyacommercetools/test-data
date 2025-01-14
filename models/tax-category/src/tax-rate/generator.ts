import { fake, Generator } from '@commercetools-test-data/core';
import { TTaxRate } from './types';

//https://docs.commercetools.com/api/projects/taxCategories#taxrate

const generator = Generator<TTaxRate>({
  fields: {
    id: fake((f) => f.string.uuid()),
    name: fake((f) => f.lorem.words(2)),
    amount: fake((f) => Number(f.finance.amount(0, 1, 3))),
    includedInPrice: fake((f) => f.datatype.boolean()),
    country: fake((f) => f.location.countryCode()),
    state: fake((f) => f.location.state()),
    subRates: null,
  },
});

export default generator;
