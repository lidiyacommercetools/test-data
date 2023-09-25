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

const vatStandardEuDraft = TaxCategoryDraft.presets.sampleDataGoodstore
  .vatStandardEu()
  .build<TTaxCategoryDraft>();

const squareBambooCoasterProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataGoodstore
  .barAccessories()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .barAndGlassware()
  .build<TCategoryDraft>();

const squareBambooCoaster = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('square-bamboo-coaster')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Square Bamboo Coaster')
        ['de-DE']('Quadratischer Untersetzer aus Bambus')
        ['en-US']('Square Bamboo Coaster')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('square-bamboo-coaster')
        ['de-DE']('quadratischer-untersetzer-aus-bambus')
        ['en-US']('square-bamboo-coaster')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(squareBambooCoasterProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.squareBambooCoaster01()
    )
    .categories([
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(barAccessoriesDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
    ]);

export default squareBambooCoaster;
