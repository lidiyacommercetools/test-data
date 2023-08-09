import { Builder } from '@commercetools-test-data/core';
import type {
  TPaymentMethodInfoDraft,
  TCreatePaymentMethodInfoDraftBuilder,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreatePaymentMethodInfoDraftBuilder = () =>
  Builder<TPaymentMethodInfoDraft>({
    generator,
    transformers,
  });

export default Model;
