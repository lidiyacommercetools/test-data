import type { TBuilder } from '@commercetools-test-data/core';
import {
  ProductDiscountValueAbsolute,
  ProductDiscountValueAbsoluteDraft,
} from '@commercetools/platform-sdk';

export type TProductDiscountValueAbsolute = ProductDiscountValueAbsolute;
export type TProductDiscountValueAbsoluteDraft =
  ProductDiscountValueAbsoluteDraft;

export type TProductDiscountValueAbsoluteGraphql =
  TProductDiscountValueAbsolute & {
    __typename: 'ProductDiscountValueAbsolute';
  };
export type TProductDiscountValueAbsoluteDraftGraphql =
  TProductDiscountValueAbsoluteDraft & {
    __typename: 'ProductDiscountValueAbsoluteDraft';
  };

export type TProductDiscountValueAbsoluteBuilder =
  TBuilder<TProductDiscountValueAbsolute>;
export type TProductDiscountValueAbsoluteDraftBuilder =
  TBuilder<TProductDiscountValueAbsoluteDraft>;

export type TCreateProductDiscountValueAbsoluteBuilder =
  () => TProductDiscountValueAbsoluteBuilder;
export type TCreateProductDiscountValueAbsoluteDraftBuilder =
  () => TProductDiscountValueAbsoluteDraftBuilder;
