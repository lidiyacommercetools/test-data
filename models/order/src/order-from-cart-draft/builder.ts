import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateOrderFromCartDraftBuilder,
  TOrderFromCartDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateOrderFromCartDraftBuilder = () =>
  Builder<TOrderFromCartDraft>({
    generator,
    transformers,
  });

export default Model;
