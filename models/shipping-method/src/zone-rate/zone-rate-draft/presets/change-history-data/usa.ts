import { KeyReference } from '@commercetools-test-data/commons';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

// zone with key'e2e-us-zone' will always be set in the project under test
//{ "name": "e2e-us-zone", "key" : "e2e-us-zone", "locations": [{ "country": "US"} ]}

const unitedStates = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReference.presets.zone().key('e2e-us-zone'))
    .shippingRates([ShippingRateDraft.presets.changeHistoryData.usd()]);

export default unitedStates;
