import {
  CartDiscount,
  CartDiscountDraft,
  CartDiscountTarget,
  CartDiscountValueDraft,
} from '@commercetools/platform-sdk';
import {
  TClientLoggingGraphql,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCartDiscount = CartDiscount;
export type TCartDiscountDraft = CartDiscountDraft;

export type TCartDiscountGraphql = TCartDiscount & {
  __typename: 'CartDiscount';
  createdBy: TClientLoggingGraphql;
  lastModifiedBy: TClientLoggingGraphql;
  nameAllLocales?: TLocalizedStringGraphql | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
};
export type TCartDiscountDraftGraphql = Omit<
  TCartDiscountDraft,
  'name' | 'description' | 'value' | 'target'
> & {
  name: TLocalizedStringGraphql;
  description?: TLocalizedStringGraphql | null;
  value: {
    [key: string]: Omit<CartDiscountValueDraft, 'type'>;
  };
  target: {
    [key: string]: Omit<CartDiscountTarget, 'type'>;
  };
};

export type TCartDiscountBuilder = TBuilder<TCartDiscount>;
export type TCartDiscountDraftBuilder = TBuilder<TCartDiscountDraft>;

export type TCreateCartDiscountBuilder = () => TCartDiscountBuilder;
export type TCreateCartDiscountDraftBuilder = () => TCartDiscountDraftBuilder;
