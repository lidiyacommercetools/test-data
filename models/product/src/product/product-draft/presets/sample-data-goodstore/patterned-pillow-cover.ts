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

const patternedPillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodstore
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeDecor()
  .build<TCategoryDraft>();

const patternedPillowCover = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('patterned-pillow-cover')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Patterned Pillow Cover')
        ['de-DE']('Gemusterte Kissenhülle')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('patterned-pillow-cover')
        ['de-DE']('gemusterte-kissenhlle')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(patternedPillowCoverProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.patternedPillowCover01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodstore.patternedPillowCover01(),
    ])
    .categories([
      KeyReference.presets.category().key(beddingDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default patternedPillowCover;
