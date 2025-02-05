import type { Category, CategoryDraft } from '@commercetools/platform-sdk';
import type {
  TClientLoggingGraphql,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

//CategoryDraft
export type TCategoryDraft = CategoryDraft;
export type TCategoryDraftBuilder = TBuilder<TCategoryDraft>;
export type TCreateCategoryDraftBuilder = () => TCategoryDraftBuilder;
export type TCategoryDraftGraphql = Omit<
  TCategory,
  | 'name'
  | 'description'
  | 'slug'
  | 'metaTitle'
  | 'metaDescription'
  | 'metaKeywords'
> & {
  name: TLocalizedStringGraphql;
  description?: TLocalizedStringGraphql | null;
  slug: TLocalizedStringGraphql;
  metaTitle?: TLocalizedStringGraphql | null;
  metaDescription?: TLocalizedStringGraphql | null;
  metaKeywords?: TLocalizedStringGraphql | null;
};

//Category
export type TCategory = Category;
export type TCategoryBuilder = TBuilder<TCategory>;
export type TCreateCategoryBuilder = () => TCategoryBuilder;
export type TCategoryGraphql = Omit<
  TCategory,
  // In GraphQL, we prefer to use `nameAllLocales` instead of `name`.
  | 'name'
  // In GraphQL, we prefer to use `descriptionAllLocales` instead of `description`.
  | 'description'
  // In GraphQL, the object shape is different.
  | 'createdBy'
  // In GraphQL, the object shape is different.
  | 'lastModifiedBy'
> & {
  __typename: 'Category';
  createdBy: TClientLoggingGraphql;
  lastModifiedBy: TClientLoggingGraphql;
  nameAllLocales?: TLocalizedStringGraphql | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
};
