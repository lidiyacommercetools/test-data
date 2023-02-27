import { TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { ValueOf } from '@commercetools-test-data/core/src/@jackfranklin/test-data-bot';
import {
  CategoryReference,
  ProductData,
  ProductVariant,
  SearchKeyword,
  CategoryOrderHints,
  Category,
} from '@commercetools/platform-sdk';

// The base generator model. Consumers configure these fields.
export type TProductData = Omit<ProductData, 'categories'> & {
  categories: Array<Category>;
  searchKeyword?: Array<SearchKeyword> | null;
  allVariants: Array<ProductVariant>;
  variant: ProductVariant;
  skus: Array<String>;
};

// Fields here must be transformable from the base model
export type TProductDataRest = Omit<ProductData, 'categories'> & {
  categories: Array<CategoryReference>;
};

// This type only appears in the GraphQL representation
export type TCategoryOrderHintGraphql = {
  categoryId: keyof CategoryOrderHints;
  orderHint: ValueOf<CategoryOrderHints>;
  __typename: 'CategoryOrderHint';
};

export type TCategoryReferenceGraphql = CategoryReference & {
  __typename: 'Reference';
};

// Fields here must be transformable from the base model
export type TProductDataGraphql = Omit<
  TProductData,
  'categories' | 'categoryOrderHints'
> & {
  categoryOrderHints: Array<TCategoryOrderHintGraphql>;
  categoryOrderHint: String | null;
  categoriesRef: Array<TCategoryReferenceGraphql>;
  categories: Array<Category>;
  nameAllLocales?: TLocalizedStringGraphql | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
  slugAllLocales?: TLocalizedStringGraphql | null;
  metaTitleAllLocales?: TLocalizedStringGraphql | null;
  metaKeywordsAllLocales?: TLocalizedStringGraphql | null;
  metaDescriptionAllLocales?: TLocalizedStringGraphql | null;
  __typename: 'ProductData';
};

export type TProductDataBuilder = TBuilder<TProductData>;
export type TCreateProductDataBuilder = () => TProductDataBuilder;
