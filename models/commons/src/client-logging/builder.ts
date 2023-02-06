import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateClientLoggingBuilder, TClientLogging } from './types';

const Model: TCreateClientLoggingBuilder = () =>
  Builder<TClientLogging>({
    generator,
    transformers,
  });

export default Model;
