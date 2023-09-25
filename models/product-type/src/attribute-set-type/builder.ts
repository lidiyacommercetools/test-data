import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import { TAttributeSetType, TCreateAttributeSetTypeBuilder } from './types';

const Model: TCreateAttributeSetTypeBuilder = () =>
  Builder<TAttributeSetType>({
    generator,
    transformers,
  });

export default Model;
