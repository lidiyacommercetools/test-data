import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateDiscountCodeDraftBuilder,
  TDiscountCodeDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateDiscountCodeDraftBuilder = () =>
  Builder<TDiscountCodeDraft>({
    generator,
    transformers,
  });

export default Model;
