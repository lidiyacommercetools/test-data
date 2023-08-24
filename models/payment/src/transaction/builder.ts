import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TTransaction, TCreateTransactionBuilder } from './types';

const Model: TCreateTransactionBuilder = () =>
  Builder<TTransaction>({
    generator,
    transformers,
  });

export default Model;
