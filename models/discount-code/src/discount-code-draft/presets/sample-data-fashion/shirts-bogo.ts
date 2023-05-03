import {
  CartDiscountDraft,
  TCartDiscountDraft,
} from '@commercetools-test-data/cart-discount';
import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { TDiscountCodeDraftBuilder } from '../../../types';
import * as DiscountCodeDraft from '../../index';

const cartDiscountDraft = CartDiscountDraft.presets.sampleDataFashion
  .shirtsBogo()
  .build<TCartDiscountDraft>();

const shirtsBogo = (): TDiscountCodeDraftBuilder =>
  DiscountCodeDraft.presets
    .empty()
    .code('BOGO')
    .name(LocalizedString.presets.empty()['en-US']('BOGO'))
    .description(LocalizedString.presets.empty())
    .cartDiscounts([
      KeyReference.random().key(cartDiscountDraft.key!).typeId('cart-discount'),
    ])
    .isActive(true)
    .maxApplications(1)
    .maxApplicationsPerCustomer(1)
    .groups([]);

export default shirtsBogo;
