import { Transformer } from '@commercetools-test-data/core';
import type { TLocalizedString, TLocalizedStringGraphql } from './types';

const isNil = (value: string | undefined) =>
  value === undefined || value === null;

const transformers = {
  rest: Transformer<TLocalizedString, TLocalizedString>('rest', {}),
  graphql: Transformer<TLocalizedString, TLocalizedStringGraphql>('graphql', {
    replaceFields: ({ fields }) =>
      Object.entries(fields)
        .filter(([, value]) => !isNil(value))
        .map(([locale, value]) => ({
          locale,
          value,
          __typename: 'LocalizedString',
        })),
  }),
};

export default transformers;
