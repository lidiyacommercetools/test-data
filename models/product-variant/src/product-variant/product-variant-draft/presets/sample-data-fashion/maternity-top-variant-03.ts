import { Money, PriceDraft } from '@commercetools-test-data/commons';
import * as ProductVariantDraft from '../..';
import { AttributeDraft } from '../../../../attribute/';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';

const maternityTopVariant03 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('118718')
    .key('118718')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(2695))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('AUD').centAmount(2500))
        .country('AU'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-lOB-DcqK.png'
        )
        .dimensions({ w: 262, h: 300 }),
    ])
    .attributes([
      AttributeDraft.random().name('size').value({
        key: 'Large',
        label: 'Large',
      }),
      AttributeDraft.random().name('color').value({
        key: 'Green',
        label: 'Green',
      }),
    ]);

export default maternityTopVariant03;
