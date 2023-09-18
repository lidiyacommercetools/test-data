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

const cocktailShakerProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataGoodstore
  .barAccessories()
  .build<TCategoryDraft>();

const barGlasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .barGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const cocktailShaker = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('cocktail-shaker')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Cocktail Shaker')
        ['de-DE']('Cocktail Shaker')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('cocktail-shaker')
        ['de-DE']('cocktail-shaker')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(cocktailShakerProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(KeyReference.presets.taxCategory().key(euDraft.key!))
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.cocktailShaker01()
    )
    .categories([
      KeyReference.presets.category().key(barAccessoriesDraft.key!),
      KeyReference.presets.category().key(barGlasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default cocktailShaker;
