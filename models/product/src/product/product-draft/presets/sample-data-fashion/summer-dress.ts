import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const dressesProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .dresses()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const categoryDraft = CategoryDraft.presets.sampleDataFashion
  .otherWomen()
  .build<TCategoryDraft>();

const summerDress = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Sample Summer Dress'))
    .slug(LocalizedString.presets.empty()['en-US']('sample-summer-dress'))
    .productType(
      KeyReference.presets.productType().key(dressesProductTypeDraft.key!)
    )
    .publish(false)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.summerDressVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.summerDressVariant02(),
    ])
    .key('summer_dress')
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .categories([KeyReference.presets.category().key(categoryDraft.key!)]);

export default summerDress;
