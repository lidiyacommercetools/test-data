import { Product, ProductDraft } from '@commercetools/platform-sdk';
import {
  TLocalizedStringGraphql,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TProduct = Product & {
  skus: Array<String>;
};

export type TProductRest = Omit<TProduct, 'skus'>;

export type TProductGraphql = TProduct & {
  productTypeRef: TReferenceGraphql;
  stateRef: TReferenceGraphql;
  taxCategoryRef: TReferenceGraphql;
  // TODO: add productSelectionRefs
  __typename: 'Product';
};

export type TProductDraft = ProductDraft;
export type TProductDraftGraphql = Omit<
  TProductDraft,
  | 'name'
  | 'description'
  | 'slug'
  | 'metaTitle'
  | 'metaDescription'
  | 'metaKeywords'
> & {
  name: TLocalizedStringGraphql;
  slug: TLocalizedStringGraphql;
  description?: TLocalizedStringGraphql | null;
  metaTitle?: TLocalizedStringGraphql | null;
  metaDescription?: TLocalizedStringGraphql | null;
  metaKeywords?: TLocalizedStringGraphql | null;
};

export type TProductBuilder = TBuilder<TProduct>;
export type TCreateProductBuilder = () => TProductBuilder;

export type TProductDraftBuilder = TBuilder<TProductDraft>;
export type TCreateProductDraftBuilder = () => TProductDraftBuilder;

export type TProductBuilderGraphql = TBuilder<TProductGraphql>;
export type TCreateProductBuilderGraphql = () => TProductBuilderGraphql;
