import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const skinnyJeansVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('396594')
    .key('396594')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(4999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(4500))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/skinny-QJz4Jcme.jpeg'
        )
        .dimensions({ w: 183, h: 275 }),
    ])
    .attributes([
      AttributeDraft.random().name('fit').value({
        key: 'Slim',
        label: 'Slim',
      }),
      AttributeDraft.random().name('size').value({
        key: 'Medium',
        label: 'Medium',
      }),
    ]);

export default skinnyJeansVariant01;
