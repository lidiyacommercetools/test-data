import type { TBuilder } from '@commercetools-test-data/core';
import {
  ProductDiscountValueExternal,
  ProductDiscountValueExternalDraft,
} from '@commercetools/platform-sdk';

export type TProductDiscountValueExternal = ProductDiscountValueExternal;
export type TProductDiscountValueExternalDraft =
  ProductDiscountValueExternalDraft;

export type TProductDiscountValueExternalGraphql =
  TProductDiscountValueExternal & {
    __typename: 'ProductDiscountValueExternal';
  };
export type TProductDiscountValueExternalDraftGraphql =
  TProductDiscountValueExternalDraft & {
    __typename: 'ProductDiscountValueExternalDraft';
  };

export type TProductDiscountValueExternalBuilder =
  TBuilder<TProductDiscountValueExternal>;
export type TProductDiscountValueExternalDraftBuilder =
  TBuilder<TProductDiscountValueExternalDraft>;

export type TCreateProductDiscountValueExternalBuilder =
  () => TProductDiscountValueExternalBuilder;
export type TCreateProductDiscountValueExternalDraftBuilder =
  () => TProductDiscountValueExternalDraftBuilder;
