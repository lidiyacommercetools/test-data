import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernUpholsteredTwinBed03 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MUTB-03')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(45000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(45000))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_207178461-bmOvu0su.jpeg'
        )
        .dimensions({ w: 4000, h: 4000 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_207178544-9vyswQY1.jpeg'
        )
        .dimensions({ w: 4000, h: 4000 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_207178443-saXZIXa5.jpeg'
        )
        .dimensions({ w: 4000, h: 4000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Cotton upholstery \n- Manufactured wood\n- Twin size\n- Assembled on site',
        'en-GB':
          '- Cotton upholstery \n- Manufactured wood\n- Twin size\n- Assembled on site',
        'de-DE':
          '- Cotton upholstery \n- Manufactured wood\n- Twin size\n- Assembled on site',
      }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-US': 'Oak', 'en-GB': 'Oak', 'de-DE': 'Oak' }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': 'grey', 'en-GB': 'grey', 'de-DE': 'grey' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-US': 'Grey', 'en-GB': 'Grey', 'de-DE': 'Grey' }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'lightslategrey',
        'en-GB': 'lightslategrey',
        'de-DE': 'lightslategrey',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A twin size bed with fabric upholstery in a modern style is a sleek and stylish piece of furniture that can add a touch of sophistication to any bedroom. The bed typically features a simple and minimalistic design, with clean lines and geometric shapes that are characteristic of modern style.  The frame of the bed is made from wood, with a low profile that creates a sleek and contemporary look. The fabric upholstery covers the headboard, footboard, and side rails of the bed, providing a soft and comfortable surface to lean against or rest on.  The size of the bed is twin, which makes it an ideal choice for smaller bedrooms or guest rooms. It can be paired with a range of bedding and accessories to create a cohesive and stylish look that reflects your personal style.  Overall, a twin size bed with fabric upholstery in a modern style is a sleek and sophisticated piece of furniture that can elevate the look and feel of any bedroom. Its simple yet stylish design, combined with its comfortable and soft upholstery, make it a perfect place to rest and relax in style.',
        'en-US':
          'A twin size bed with fabric upholstery in a modern style is a sleek and stylish piece of furniture that can add a touch of sophistication to any bedroom. The bed typically features a simple and minimalistic design, with clean lines and geometric shapes that are characteristic of modern style.  The frame of the bed is made from wood, with a low profile that creates a sleek and contemporary look. The fabric upholstery covers the headboard, footboard, and side rails of the bed, providing a soft and comfortable surface to lean against or rest on.  The size of the bed is twin, which makes it an ideal choice for smaller bedrooms or guest rooms. It can be paired with a range of bedding and accessories to create a cohesive and stylish look that reflects your personal style.  Overall, a twin size bed with fabric upholstery in a modern style is a sleek and sophisticated piece of furniture that can elevate the look and feel of any bedroom. Its simple yet stylish design, combined with its comfortable and soft upholstery, make it a perfect place to rest and relax in style.',
        'de-DE':
          'Ein Twin-Size-Bett mit Stoffpolsterung in modernem Stil ist ein elegantes und stilvolles Möbelstück, das jedem Schlafzimmer einen Hauch von Raffinesse verleihen kann. Das Bett hat typischerweise ein einfaches und minimalistisches Design mit klaren Linien und geometrischen Formen, die charakteristisch für den modernen Stil sind.  Der Rahmen des Bettes ist aus Holz gefertigt und hat ein niedriges Profil, das einen eleganten und modernen Look erzeugt. Die Stoffpolsterung bedeckt das Kopfteil, das Fußteil und die Seitengitter des Bettes und bietet eine weiche und bequeme Oberfläche zum Anlehnen oder Ausruhen.  Die Größe des Bettes ist Twin, was es zu einer idealen Wahl für kleinere Schlafzimmer oder Gästezimmer macht. Es kann mit einer Reihe von Bettwäsche und Accessoires kombiniert werden, um einen zusammenhängenden und stilvollen Look zu schaffen, der Ihren persönlichen Stil widerspiegelt.  Insgesamt ist ein Twin-Size-Bett mit Stoffpolsterung in modernem Stil ein elegantes und raffiniertes Möbelstück, das das Erscheinungsbild jedes Schlafzimmers aufwerten kann. Sein einfaches, aber stilvolles Design, kombiniert mit seiner bequemen und weichen Polsterung, machen es zu einem perfekten Ort, um sich stilvoll auszuruhen und zu entspannen.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
    ]);

export default modernUpholsteredTwinBed03;
