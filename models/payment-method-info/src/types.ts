import { PaymentMethodInfo } from '@commercetools/platform-sdk';
import { TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TPaymentMethodInfo = PaymentMethodInfo;

export type TPaymentMethodInfoGraphql = TPaymentMethodInfo & {
  nameAllLocales?: TLocalizedStringGraphql | null;
  __typename: 'PaymentMethodInfo';
};

export type TPaymentMethodInfoBuilder = TBuilder<TPaymentMethodInfo>;
export type TCreatePaymentMethodInfoBuilder = () => TPaymentMethodInfoBuilder;
