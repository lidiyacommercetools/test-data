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

const stoneServingTrayProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const servewareDraft = CategoryDraft.presets.sampleDataGoodstore
  .serveware()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodstore
  .dinnerware()
  .build<TCategoryDraft>();

const cheeseTraysDraft = CategoryDraft.presets.sampleDataGoodstore
  .cheeseTrays()
  .build<TCategoryDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataGoodstore
  .servingPlatters()
  .build<TCategoryDraft>();

const bakewareDraft = CategoryDraft.presets.sampleDataGoodstore
  .bakeware()
  .build<TCategoryDraft>();

const stoneServingTray = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('stone-serving-tray')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Stone Serving Tray')
        ['de-DE']('Serviertablett aus Stein')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('stone-serving-tray')
        ['de-DE']('serviertablett-aus-stein')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(stoneServingTrayProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.stoneServingTray01()
    )
    .categories([
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(servewareDraft.key!),
      KeyReference.presets.category().key(dinnerwareDraft.key!),
      KeyReference.presets.category().key(cheeseTraysDraft.key!),
      KeyReference.presets.category().key(servingPlattersDraft.key!),
      KeyReference.presets.category().key(bakewareDraft.key!),
    ]);

export default stoneServingTray;
