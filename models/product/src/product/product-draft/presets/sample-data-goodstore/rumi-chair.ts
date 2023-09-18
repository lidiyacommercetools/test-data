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

const rumiChairProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodstore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataGoodstore
  .armchairs()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .furniture()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const rumiChair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('rumi-chair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Rumi Chair')
        ['de-DE']('Rumi Stuhl')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('rumi-chair')
        ['de-DE']('rumi-stuhl')
    )
    .productType(
      KeyReference.presets.productType().key(rumiChairProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.rumiChair01()
    )
    .categories([
      KeyReference.presets.category().key(armchairsDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default rumiChair;
