import {
  ProductDiscountValueExternal,
  ProductDiscountValueExternalDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TProductDiscountValueExternal = ProductDiscountValueExternal;
export type TProductDiscountValueExternalDraft =
  ProductDiscountValueExternalDraft;

export type TProductDiscountValueExternalGraphql =
  TProductDiscountValueExternal & {
    __typename: 'ProductDiscountValueExternal';
  };
export type TProductDiscountValueExternalDraftGraphql =
  TProductDiscountValueExternalDraft;

export type TProductDiscountValueExternalBuilder =
  TBuilder<TProductDiscountValueExternal>;
export type TProductDiscountValueExternalDraftBuilder =
  TBuilder<TProductDiscountValueExternalDraft>;

export type TCreateProductDiscountValueExternalBuilder =
  () => TProductDiscountValueExternalBuilder;
export type TCreateProductDiscountValueExternalDraftBuilder =
  () => TProductDiscountValueExternalDraftBuilder;
