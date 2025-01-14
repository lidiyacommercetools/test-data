import { KeyReference } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import * as ShippingRateDraft from '../../shipping-rate/shipping-rate-draft';
import { TZoneRateDraft } from '../types';

// https://docs.commercetools.com/api/projects/shippingMethods#zoneratedraft

const generator = Generator<TZoneRateDraft>({
  fields: {
    zone: fake(() => KeyReference.presets.zone()),
    shippingRates: fake(() => [ShippingRateDraft.random()]),
  },
});

export default generator;
