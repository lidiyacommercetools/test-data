import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCartDiscountLineItemsTarget,
  TCreateCartDiscountLineItemsTargetBuilder,
} from './types';

const Model: TCreateCartDiscountLineItemsTargetBuilder = () =>
  Builder<TCartDiscountLineItemsTarget>({
    generator,
    transformers,
  });

export default Model;
