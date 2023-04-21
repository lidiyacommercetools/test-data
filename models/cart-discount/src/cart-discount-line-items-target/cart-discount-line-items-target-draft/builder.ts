import { Builder } from '@commercetools-test-data/core';
import type {
  TCartDiscountLineItemsTargetDraft,
  TCreateCartDiscountLineItemsTargetDraftBuilder,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCartDiscountLineItemsTargetDraftBuilder = () =>
  Builder<TCartDiscountLineItemsTargetDraft>({
    generator,
    transformers,
  });

export default Model;
