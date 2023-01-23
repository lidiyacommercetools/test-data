import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateTaxRateBuilder, TTaxRate } from './types';

const Model: TCreateTaxRateBuilder = () =>
  Builder<TTaxRate>({
    generator,
    transformers,
  });

export default Model;
