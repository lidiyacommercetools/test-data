import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateReviewBuilder, TReview } from './types';

const Model: TCreateReviewBuilder = () =>
  Builder<TReview>({
    generator,
    transformers,
  });

export default Model;
