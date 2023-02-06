import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateProductDiscountValueAbsoluteDraftBuilder,
  TProductDiscountValueAbsoluteDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateProductDiscountValueAbsoluteDraftBuilder = () =>
  Builder<TProductDiscountValueAbsoluteDraft>({
    generator,
    transformers,
  });

export default Model;
