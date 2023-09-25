import { LocalizedString } from '@commercetools-test-data/commons';
import {
  AttributeDefinitionDraft,
  AttributeSetTypeDraft,
} from '../../../../index';
import type { TProductTypeDraftBuilder } from '../../../types';
import * as ProductTypeDraft from '../../index';

const beddingBundle = (): TProductTypeDraftBuilder =>
  ProductTypeDraft.presets
    .empty()
    .key('bedding-bundle')
    .name('Bedding Bundle')
    .description('Product type used to bundle bedding components')
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('product-description')
        .label(LocalizedString.presets.empty()['en-GB']('product-description'))
        .inputTip(
          LocalizedString.presets
            .empty()
            ['en-GB']('description of the bundle product')
        )
        .isRequired(false)
        .attributeConstraint('SameForAll')
        .isSearchable(false)
        .inputHint('SingleLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('product-spec')
        .label(LocalizedString.presets.empty()['en-GB']('Product Spec'))
        .isRequired(false)
        .attributeConstraint('SameForAll')
        .isSearchable(false)
        .inputHint('SingleLine'),

      AttributeDefinitionDraft.presets
        .empty()
        .name('product-ref')
        .label(
          LocalizedString.presets
            .empty()
            ['en-GB']('Products of this bundle')
            ['de-DE']('Produkte dieses Bundles')
        )
        .isRequired(false)
        .type(
          AttributeSetTypeDraft.random().elementType({
            name: 'reference',
            referenceTypeId: 'product',
          })
        )
        .attributeConstraint('None')
        .isSearchable(false)
        .inputHint('SingleLine'),
    ]);

export default beddingBundle;
