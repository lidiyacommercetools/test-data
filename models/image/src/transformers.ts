import { Transformer } from '@commercetools-test-data/core';
import type { TImage, TImageGraphql } from './types';

const transformers = {
  default: Transformer<TImage, TImage>('default', {
    buildFields: [],
  }),
  rest: Transformer<TImage, TImage>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TImage, TImageGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'Image',
    }),
  }),
};

export default transformers;
