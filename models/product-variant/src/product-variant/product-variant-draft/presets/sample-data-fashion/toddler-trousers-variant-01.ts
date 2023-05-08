import {
  CentPrecisionMoney,
  PriceDraft,
} from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const toddlerTrousersVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('855484')
    .key('855484')
    .prices([
      PriceDraft.presets
        .empty()
        .value(
          CentPrecisionMoney.CentPrecisionMoneyDraft.random()
            .currencyCode('USD')
            .centAmount(2599)
        )
        .country('US'),
    ])
    .images([
      Image.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-Z7CSIEMu.gif'
        )
        .dimensions({ w: 612, h: 792 }),
    ])
    .attributes([
      AttributeDraft.random().name('size').value({
        key: 'Small',
        label: 'Small',
      }),
      AttributeDraft.random().name('fit').value({
        key: 'Straight',
        label: 'Straight',
      }),
      AttributeDraft.random().name('color').value({
        key: 'White',
        label: 'White',
      }),
      AttributeDraft.random().name('length').value({
        key: 'Ankle',
        label: 'Ankle',
      }),
    ]);

export default toddlerTrousersVariant01;
