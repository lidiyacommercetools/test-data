import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const summerDressVariant02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('439502')
    .key('439502')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(7500))
        .country('US'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('AUD').centAmount(7500))
        .country('AU'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/pinkdress-kKvWVHgG.png'
        )
        .dimensions({ w: 199, h: 254 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        key: 'Pink',
        label: 'Pink',
      }),
    ]);

export default summerDressVariant02;
