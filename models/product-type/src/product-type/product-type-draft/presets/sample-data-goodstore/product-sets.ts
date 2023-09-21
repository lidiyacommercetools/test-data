import { LocalizedString } from '@commercetools-test-data/commons';
import { AttributeDefinitionDraft } from '../../../../index';
import type { TProductTypeDraftBuilder } from '../../../types';
import * as ProductTypeDraft from '../../index';

const productSets = (): TProductTypeDraftBuilder =>
  ProductTypeDraft.presets
    .empty()
    .key('product-sets')
    .name('Product sets')
    .description('products also sold as sets with their variants')
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('type')
        .label(LocalizedString.presets.empty()['en-GB']('Type')['de-DE']('Typ'))
        .attributeConstraint('None')
        .isSearchable(true)
        .inputHint('SingleLine'),
    ]);

export default productSets;
