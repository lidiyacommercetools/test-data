import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const sandTeaCup01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('STM-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(299))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Sand%20Tea%20Cup-yM4SUI5o.jpeg'
        )
        .dimensions({ w: 6046, h: 4020 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 mug',
        'de-DE': '- Enthält 1 Tasse',
        'en-US': '- Includes 1 mug',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'The Sand Tea Cup is a type of drinking vessel that is designed to hold and serve tea and/or coffee. It has a cylindrical or slightly tapered shape, with a capacity of around 8 to 16 ounces, and is a light brownish color.  The mug is made of ceramic. The body of the mug is smooth-sided, with a wide opening that makes it easy to pour and drink coffee or tea.  The handle of the mug is designed to be easy to grip, with a comfortable shape and a size that fits most hands. The bottom of the mug is typically flat, with a stable base that helps to prevent tipping and spilling.  The Sand Tea Cup is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, this mug is a practical and functional type of drinking vessel that is ideal for enjoying a hot drink at home or at work. Its neutral color and simple design make it a popular choice for coffee lovers who prefer a classic and understated look.',
        'en-US':
          'The Sand Tea Cup is a type of drinking vessel that is designed to hold and serve tea and/or coffee. It has a cylindrical or slightly tapered shape, with a capacity of around 8 to 16 ounces, and is a light brownish color.  The mug is made of ceramic. The body of the mug is smooth-sided, with a wide opening that makes it easy to pour and drink coffee or tea.  The handle of the mug is designed to be easy to grip, with a comfortable shape and a size that fits most hands. The bottom of the mug is typically flat, with a stable base that helps to prevent tipping and spilling.  The Sand Tea Cup is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, this mug is a practical and functional type of drinking vessel that is ideal for enjoying a hot drink at home or at work. Its neutral color and simple design make it a popular choice for coffee lovers who prefer a classic and understated look.',
        'de-DE':
          'Der Sand Tea Cup ist eine Art Trinkgefäß, das zum Aufbewahren und Servieren von Tee und/oder Kaffee entwickelt wurde. Es hat eine zylindrische oder leicht konische Form mit einem Fassungsvermögen von etwa 8 bis 16 Unzen und eine hellbräunliche Farbe.  Der Becher ist aus Keramik. Der Körper des Bechers hat glatte Seiten und eine breite Öffnung, die das Eingießen und Trinken von Kaffee oder Tee erleichtert.  Der Griff des Bechers ist so konzipiert, dass er leicht zu greifen ist, mit einer bequemen Form und einer Größe, die für die meisten Hände geeignet ist. Der Boden des Bechers ist normalerweise flach, mit einer stabilen Basis, die hilft, ein Umkippen und Verschütten zu verhindern.  Die Sand Tea Cup ist leicht zu reinigen und zu pflegen. Es kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Insgesamt ist dieser Becher ein praktisches und funktionelles Trinkgefäß, das sich ideal für den Genuss eines Heißgetränks zu Hause oder auf der Arbeit eignet. Seine neutrale Farbe und sein schlichtes Design machen ihn zu einer beliebten Wahl für Kaffeeliebhaber, die einen klassischen und dezenten Look bevorzugen.',
      }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Sand', 'de-DE': 'Sand', 'en-US': 'Sand' }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFDC94', 'de-DE': '#FFDC94', 'en-US': '#FFDC94' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
    ]);

export default sandTeaCup01;