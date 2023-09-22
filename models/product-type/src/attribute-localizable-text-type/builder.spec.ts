/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { type TAttributeLocalizableTextType } from './types';
import * as AttributeLocalizableTextType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TAttributeLocalizableTextType,
      TAttributeLocalizableTextType
    >(
      'default',
      AttributeLocalizableTextType.random(),
      expect.objectContaining({
        name: 'ltext',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAttributeLocalizableTextType,
      TAttributeLocalizableTextType
    >(
      'rest',
      AttributeLocalizableTextType.random(),
      expect.objectContaining({
        name: 'ltext',
      })
    )
  );
  //There are no graphql tests at this time
});