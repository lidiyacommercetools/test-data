import { Builder } from '@commercetools-test-data/core';
import type {
  TCartDiscountShippingCostTargetDraft,
  TCreateCartDiscountShippingCostTargetDraftBuilder,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCartDiscountShippingCostTargetDraftBuilder = () =>
  Builder<TCartDiscountShippingCostTargetDraft>({
    generator,
    transformers,
  });

export default Model;
