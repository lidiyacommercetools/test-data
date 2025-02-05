/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TAttributeEnumType, TAttributeEnumTypeGraphql } from './types';
import * as AttributeEnumType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumType>(
      'default',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'enum',
        values: [],
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumType>(
      'rest',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'enum',
        values: [],
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumTypeGraphql>(
      'graphql',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'enum',
        values: [],
        __typename: 'AttributeEnumDefinitionType',
      })
    )
  );
});
