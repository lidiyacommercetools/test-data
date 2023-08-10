import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateStoreBuilder, TStore } from './types';

const Model: TCreateStoreBuilder = () =>
  Builder<TStore>({
    generator,
    transformers,
  });

export default Model;
