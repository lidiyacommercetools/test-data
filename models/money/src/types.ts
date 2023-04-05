import { Money } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TMoney = Money;

export type TMoneyGraphql = TMoney & {
  __typename: 'BaseMoneyInput';
};

export type TMoneyBuilder = TBuilder<TMoney>;
export type TCreateMoneyBuilder = () => TMoneyBuilder;
