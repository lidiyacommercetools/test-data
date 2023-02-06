import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import {
  TAttributePlainEnumValue,
  TCreateAttributePlainEnumValueBuilder,
} from './types';

const Model: TCreateAttributePlainEnumValueBuilder = () =>
  Builder<TAttributePlainEnumValue>({
    generator,
    transformers,
  });

export default Model;
