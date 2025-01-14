import { Transformer } from '@commercetools-test-data/core';
import type { TBusinessUnit, TBusinessUnitGraphql } from '../types';

const transformers = {
  default: Transformer<TBusinessUnit, TBusinessUnit>('default', {
    buildFields: ['addresses', 'createdBy', 'lastModifiedBy', 'parentUnit'],
  }),
  rest: Transformer<TBusinessUnit, TBusinessUnit>('rest', {
    buildFields: ['addresses', 'createdBy', 'lastModifiedBy', 'parentUnit'],
  }),
  //only scaffolding provided at this time
  graphql: Transformer<TBusinessUnit, TBusinessUnitGraphql>('graphql', {
    buildFields: [],
  }),
};

export default transformers;
