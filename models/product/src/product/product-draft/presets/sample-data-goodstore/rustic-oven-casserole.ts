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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const rusticOvenCasseroleProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const rusticOvenCasserole = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('rustic-oven-casserole')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Rustic Oven Casserole')
        ['de-DE']('Rustikaler Ofentopf')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('rustic-oven-casserole')
        ['de-DE']('rustikaler-ofentopf')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(rusticOvenCasseroleProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.rusticOvenCasserole01()
    )
    .categories([]);

export default rusticOvenCasserole;
