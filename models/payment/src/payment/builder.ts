import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TPayment, TCreatePaymentBuilder } from './types';

const Model: TCreatePaymentBuilder = () =>
  Builder<TPayment>({
    generator,
    transformers,
  });

export default Model;
