import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const slateArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('SARM-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(59900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(59900))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_209944147-LGzWeBna.jpeg'
        )
        .dimensions({ w: 5009, h: 4004 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_220496250-oK34fG4v.jpeg'
        )
        .dimensions({ w: 5544, h: 3498 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('product-description')
        .value({
          'de-DE':
            'Ein minimalistischer Stuhl mit Ottomane ist ein schlankes und schlichtes Design, das klare Linien und Funktionalität betont. Die Ottomane ist ein passendes Stück und bietet dem Benutzer einen Ort, an dem er seine Füße abstützen und sich entspannen kann. Die Polsterung ist minimal, mit neutralen Farben und einfachen Mustern. Das Design ist von der modernen Ästhetik der Mitte des Jahrhunderts inspiriert, mit Fokus auf Schlichtheit und Funktionalität. Das Ergebnis ist ein bequemer und stilvoller Stuhl, der sich nahtlos in eine Vielzahl von Einrichtungsstilen einfügt.',
          'en-GB':
            'A minimalist chair with ottoman is a sleek and simple design that emphasizes clean lines and functionality. The ottoman is a matching piece, providing a place for the user to prop up their feet and relax. The upholstery is minimal, with neutral colors and simple patterns. The design is inspired by mid-century modern aesthetics, with a focus on simplicity and functionality. The result is a comfortable and stylish chair that fits seamlessly into a variety of interior design styles.',
          'en-US':
            'A minimalist chair with ottoman is a sleek and simple design that emphasizes clean lines and functionality. The ottoman is a matching piece, providing a place for the user to prop up their feet and relax. The upholstery is minimal, with neutral colors and simple patterns. The design is inspired by mid-century modern aesthetics, with a focus on simplicity and functionality. The result is a comfortable and stylish chair that fits seamlessly into a variety of interior design styles.',
        }),
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Includes ottoman',
          'de-DE': '- Inklusive Ottomane',
          'en-US': '- Includes ottoman',
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#989898', 'de-DE': '#989898', 'en-US': '#989898' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Slate', 'de-DE': 'Schiefer', 'en-US': 'Slate' }),
    ]);

export default slateArmchair01;