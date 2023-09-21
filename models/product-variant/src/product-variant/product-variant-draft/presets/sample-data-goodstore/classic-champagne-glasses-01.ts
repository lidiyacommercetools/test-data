import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const classicChampagneGlasses01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('ccg-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(3299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(3299))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_342788836-I5IBdTcG.jpeg'
        )
        .dimensions({ w: 5468, h: 4101 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_322879771-EwOoSpMl.jpeg'
        )
        .dimensions({ w: 2571, h: 4149 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_343603921-pub5DItO.jpeg'
        )
        .dimensions({ w: 3643, h: 5464 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US': '- Set of 5 glasses\n- Premium glass\n- Fragile',
        'en-GB': '- Set of 5 glasses\n- Premium glass\n- Fragile',
        'de-DE': '- Set aus 5 Gläsern\n- Hochwertiges Glas\n- Zerbrechlich',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          "Classic champagne flutes are tall and slender stemware glasses that are designed specifically for serving champagne or other sparkling wines. They have a narrow and elongated bowl that tapers towards the top, which helps to preserve the carbonation and aroma of the wine.  The stem of the flute is long and thin, which allows the drinker to hold the glass without warming the contents inside. This is important because champagne and other sparkling wines are typically served chilled and can lose their effervescence if they become too warm.  The base of the flute is broad and sturdy, which provides stability and balance to the glass. The classic design of the champagne flute is elegant and timeless, making it a popular choice for formal occasions and celebrations.  The glasses are made from high-quality crystal or glass, which gives them a clear and sparkling appearance. Some champagne flutes may also feature decorative etching or patterns on the bowl or stem, adding an extra touch of elegance to the design.  Overall, classic champagne flutes are a stylish and elegant way to serve champagne and other sparkling wines. Their unique design and high-quality materials make them a popular choice for special occasions, such as weddings, anniversaries, or New Year's Eve celebrations.",
        'en-US':
          "Classic champagne flutes are tall and slender stemware glasses that are designed specifically for serving champagne or other sparkling wines. They have a narrow and elongated bowl that tapers towards the top, which helps to preserve the carbonation and aroma of the wine.  The stem of the flute is long and thin, which allows the drinker to hold the glass without warming the contents inside. This is important because champagne and other sparkling wines are typically served chilled and can lose their effervescence if they become too warm.  The base of the flute is broad and sturdy, which provides stability and balance to the glass. The classic design of the champagne flute is elegant and timeless, making it a popular choice for formal occasions and celebrations.  The glasses are made from high-quality crystal or glass, which gives them a clear and sparkling appearance. Some champagne flutes may also feature decorative etching or patterns on the bowl or stem, adding an extra touch of elegance to the design.  Overall, classic champagne flutes are a stylish and elegant way to serve champagne and other sparkling wines. Their unique design and high-quality materials make them a popular choice for special occasions, such as weddings, anniversaries, or New Year's Eve celebrations.",
        'de-DE':
          'Klassische Champagnerflöten sind hohe und schlanke Stielgläser, die speziell zum Servieren von Champagner oder anderen Schaumweinen entwickelt wurden. Sie haben einen schmalen und länglichen Kelch, der sich nach oben hin verjüngt, wodurch die Kohlensäure und das Aroma des Weins erhalten bleiben.  Der Stiel der Flöte ist lang und dünn, was es dem Trinker ermöglicht, das Glas zu halten, ohne den Inhalt darin zu erwärmen. Dies ist wichtig, da Champagner und andere Schaumweine normalerweise gekühlt serviert werden und ihre Spritzigkeit verlieren können, wenn sie zu warm werden.  Die Basis der Flöte ist breit und robust, was dem Glas Stabilität und Gleichgewicht verleiht. Das klassische Design der Champagnerflöte ist elegant und zeitlos, was sie zu einer beliebten Wahl für formelle Anlässe und Feiern macht.  Die Gläser sind aus hochwertigem Kristall oder Glas gefertigt, was ihnen ein klares und funkelndes Aussehen verleiht. Einige Champagnerflöten können auch dekorative Ätzungen oder Muster auf dem Kelch oder Stiel aufweisen, was dem Design einen zusätzlichen Hauch von Eleganz verleiht.  Insgesamt sind klassische Champagnerflöten eine stilvolle und elegante Art, Champagner und andere Schaumweine zu servieren. Ihr einzigartiges Design und hochwertige Materialien machen sie zu einer beliebten Wahl für besondere Anlässe wie Hochzeiten, Jubiläen oder Silvesterfeiern.',
      }),
      AttributeDraft.random().name('new-arrival').value('true'),
    ]);

export default classicChampagneGlasses01;