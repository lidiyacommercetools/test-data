import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateProductDiscountDraftBuilder,
  TProductDiscountDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateProductDiscountDraftBuilder = () =>
  Builder<TProductDiscountDraft>({
    generator,
    transformers,
  });

export default Model;
