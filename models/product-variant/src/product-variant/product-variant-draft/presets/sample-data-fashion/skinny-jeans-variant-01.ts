import * as CentPrecisionMoney from '@commercetools-test-data/cent-precision-money';
import { PriceDraft } from '@commercetools-test-data/price';
import * as ProductVariantDraft from '../..';
import { AttributeDraft } from '../../../../attribute/';
import * as Image from '../../../../image';
import { TProductVariantDraftBuilder } from '../../../types';

const skinnyJeansVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('396594')
    .key('396594')
    .prices([
      PriceDraft.presets
        .empty()
        .value(
          CentPrecisionMoney.CentPrecisionMoneyDraft.random()
            .currencyCode('EUR')
            .centAmount(4999)
        )
        .country('DE'),
    ])
    .images([
      Image.presets
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
