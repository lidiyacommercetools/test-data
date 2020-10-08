import type { TBuilder } from '@commercetools-test-data/core';

export type TLocalizedStringBuilder = TBuilder<TLocalizedString>;

export type TCreateLocalizedStringBuilder = (args?: {
  defaults?: Partial<TLocalizedString>;
}) => TLocalizedStringBuilder;

export type TLocalizedString = {
  [locale: string]: string | undefined;
};

export type TLocalizedStringGraphql = {
  __typename: 'LocalizedString';
  locale: string;
  value: string | undefined;
}[];
