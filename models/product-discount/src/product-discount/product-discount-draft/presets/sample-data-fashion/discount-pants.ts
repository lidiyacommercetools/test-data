import { LocalizedString } from '@commercetools-test-data/commons';
import { ProductDiscountValueRelativeDraft } from '../../../../index';
import type { TProductDiscountDraftBuilder } from '../../../types';
import * as ProductDiscountDraft from '../../index';

const discountPants = (): TProductDiscountDraftBuilder =>
  ProductDiscountDraft.presets
    .empty()
    .value(ProductDiscountValueRelativeDraft.random().permyriad(1000))
    // TODO: integrate product type keys
    .predicate('productType.key = "pants"')
    .name(LocalizedString.presets.empty()['en-US']('10% Off All Pants'))
    .description(LocalizedString.presets.empty()['en-US']('10% Off All Pants'))
    .isActive(true)
    .sortOrder('0.4')
    .key('10pctOffAllPants');

export default discountPants;
