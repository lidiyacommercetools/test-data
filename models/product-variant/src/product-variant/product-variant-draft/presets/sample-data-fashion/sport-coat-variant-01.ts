import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const sportCoatVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('692457')
    .key('692457')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('AUD').centAmount(20000))
        .country('AU'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(15000))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/coat-VmXqw3Xo.jpeg'
        )
        .dimensions({ w: 225, h: 225 }),
    ])
    .attributes([
      AttributeDraft.random().name('sleeve_length').value({
        key: 'Crop',
        label: 'Crop',
      }),
    ]);

export default sportCoatVariant01;
