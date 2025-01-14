import { AddressDraft, KeyReference } from '@commercetools-test-data/commons';
import {
  CustomerDraft,
  type TCustomerDraft,
} from '@commercetools-test-data/customer';
import { LineItemDraft } from '@commercetools-test-data/line-item';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product-variant';
import {
  ShippingMethodDraft,
  type TShippingMethodDraft,
} from '@commercetools-test-data/shipping-method';
import { origin } from '../../../constants';
import type { TCartDraftBuilder } from '../../../types';
import * as CartDraft from '../../index';

const customer = CustomerDraft.presets.sampleDataFashion
  .sampleAustralia()
  .build<TCustomerDraft>();
const address = AddressDraft.presets.sampleDataFashion.sampleAustralia();
const sandalsProductVariant = ProductVariantDraft.presets.sampleDataFashion
  .sandalsVariant01()
  .build<TProductVariantDraft>();
const shippingMethod = ShippingMethodDraft.presets.sampleDataFashion
  .usaAustralia()
  .build<TShippingMethodDraft>();

const sampleAustralia01 = (customerId?: string): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('sample-australia-01-cart')
    .customerId(customerId)
    .customerEmail(customer.email)
    .currency('AUD')
    .country('AU')
    .origin(origin.Merchant)
    .shippingAddress(address)
    .billingAddress(address)
    .lineItems([
      LineItemDraft.presets.empty().sku(sandalsProductVariant.sku).quantity(1),
    ])
    .shippingMethod(
      KeyReference.presets.shippingMethod().key(shippingMethod.key!)
    );

export default sampleAustralia01;
