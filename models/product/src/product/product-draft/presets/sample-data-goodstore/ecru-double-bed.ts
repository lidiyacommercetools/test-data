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

const ecruDoubleBedProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .furniture()
  .build<TCategoryDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataGoodstore
  .beds()
  .build<TCategoryDraft>();

const ecruDoubleBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('ecru-double-bed')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Ecru Double Bed')
        ['de-DE']('Ecru Doppelbett')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('ecru-double-bed')
        ['de-DE']('ecru-doppelbett')
    )
    .productType(
      KeyReference.presets.productType().key(ecruDoubleBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.ecruDoubleBed01()
    )
    .categories([
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(bedsDraft.key!),
    ]);

export default ecruDoubleBed;