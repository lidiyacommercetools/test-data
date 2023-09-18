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

const euDraft = TaxCategoryDraft.presets.sampleDataGoodstore
  .eu()
  .build<TTaxCategoryDraft>();

const purpleMinimalistAbstractPaintingProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const homeAccentsDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeAccents()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeDecor()
  .build<TCategoryDraft>();

const purpleMinimalistAbstractPainting = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('purple-minimalist-abstract-painting')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Purple Minimalist Abstract Painting')
        ['de-DE']('Lila minimalistische abstrakte Malerei')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('purple-minimalist-abstract-painting')
        ['de-DE']('lila-minimalistische-abstrakte-malerei')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(purpleMinimalistAbstractPaintingProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(KeyReference.presets.taxCategory().key(euDraft.key!))
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.purpleMinimalistAbstractPainting01()
    )
    .categories([
      KeyReference.presets.category().key(homeAccentsDraft.key!),
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default purpleMinimalistAbstractPainting;
