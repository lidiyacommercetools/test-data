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

const meadowRugProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodstore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .roomDecor()
  .build<TCategoryDraft>();

const rugsDraft = CategoryDraft.presets.sampleDataGoodstore
  .rugs()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeDecor()
  .build<TCategoryDraft>();

const meadowRug = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('meadow-rug')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Meadow Rug')
        ['de-DE']('Meadow Teppich')
        ['en-US']('Meadow Rug')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('meadow-rug')
        ['de-DE']('meadow-teppich')
        ['en-US']('meadow-rug')
    )
    .productType(
      KeyReference.presets.productType().key(meadowRugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.meadowRug01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodstore.meadowRug01(),
      ProductVariantDraft.presets.sampleDataGoodstore.meadowRug01(),
    ])
    .categories([
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(rugsDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default meadowRug;
