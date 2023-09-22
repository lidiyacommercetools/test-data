import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import {
  TAttributeLocalizableTextType,
  TCreateAttributeLocalizableTextTypeBuilder,
} from './types';

const Model: TCreateAttributeLocalizableTextTypeBuilder = () =>
  Builder<TAttributeLocalizableTextType>({
    generator,
    transformers,
  });

export default Model;
