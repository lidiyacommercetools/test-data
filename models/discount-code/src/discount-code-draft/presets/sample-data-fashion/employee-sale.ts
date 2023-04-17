import {
  CartDiscountDraft,
  TCartDiscountDraft,
} from '@commercetools-test-data/cart-discount';
import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import * as DiscountCodeDraft from '../..';
import { TDiscountCodeDraftBuilder } from '../../../types';

const cartDiscountDraft = CartDiscountDraft.presets.sampleDataFashion
  .employeeSale()
  .build<TCartDiscountDraft>();

const employeeSale = (): TDiscountCodeDraftBuilder =>
  DiscountCodeDraft.presets
    .empty()
    .code('emp15')
    .name(LocalizedString.presets.empty()['en-US']('Employee Sale'))
    .description(LocalizedString.presets.empty())
    .cartDiscounts([
      KeyReference.random().key(cartDiscountDraft.key!).typeId('cart-discount'),
    ])
    .isActive(true)
    .groups([]);

export default employeeSale;
