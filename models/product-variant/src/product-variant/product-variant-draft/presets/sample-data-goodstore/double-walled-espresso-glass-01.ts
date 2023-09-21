import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const doubleWalledEspressoGlass01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('DWEG-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(4299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(4299))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_571236838-yanGZ5gf.jpeg'
        )
        .dimensions({ w: 3371, h: 3098 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/photo-1585975761152--ZGxY2KXD.jpeg'
        )
        .dimensions({ w: 987, h: 1481 }),
    ])
    .attributes([
      AttributeDraft.random().name('product-description').value({
        'de-DE':
          'Eine doppelwandige Espressotasse aus Glas ist eine Art Trinkgefäß, das speziell zum Servieren von Espresso entwickelt wurde. Sie besteht aus Glas und ist doppelwandig aufgebaut, was bedeutet, dass es zwei Glasschichten gibt, die durch einen kleinen Spalt getrennt sind.  Das doppelwandige Design der Espressotasse aus Glas bietet mehrere Vorteile. Erstens hilft es, den Espresso zu isolieren, wodurch er länger heiß bleibt. Zweitens sorgt die doppelwandige Konstruktion dafür, dass sich die Außenseite der Tasse kühl anfühlt, wodurch sie auch bei sehr heißem Espresso angenehm in der Hand liegt.  Die Tasse ist normalerweise klein und hat ein Fassungsvermögen von etwa 2-3 Unzen, was die perfekte Größe für einen Schuss Espresso ist. Das Glas ist außerdem transparent, sodass Sie die satte, dunkle Farbe des Espressos sehen können, wenn er eingeschenkt und getrunken wird.  Die doppelwandige Espressotasse aus Glas wird oft mit einer passenden Untertasse kombiniert, die der Tasse einen stabilen Stand bietet und auch Platz für einen kleinen Löffel oder Keks bietet. Insgesamt ist die doppelwandige Espressotasse aus Glas eine stilvolle und funktionale Möglichkeit, die reichen und komplexen Aromen eines Espressos zu genießen.',
        'en-GB':
          'A double-walled glass espresso cup is a type of drinking vessel that is specifically designed for serving espresso. It is made of glass and features a double-walled construction, which means that there are two layers of glass that are separated by a small gap.  The double-walled design of the glass espresso cup provides several benefits. First, it helps to insulate the espresso, which keeps it hot for longer periods of time. Second, the double-walled construction keeps the outside of the cup cool to the touch, which makes it comfortable to hold even when the espresso inside is very hot.  The cup is typically small in size, with a capacity of around 2-3 ounces, which is the perfect size for a shot of espresso. The glass is also transparent, which allows you to see the rich, dark color of the espresso as it is poured and consumed.  The double-walled glass espresso cup is often paired with a matching saucer, which provides a stable base for the cup and also provides a place to set a small spoon or biscuit. Overall, the double-walled glass espresso cup is a stylish and functional way to enjoy the rich and complex flavors of a shot of espresso.',
        'en-US':
          'A double-walled glass espresso cup is a type of drinking vessel that is specifically designed for serving espresso. It is made of glass and features a double-walled construction, which means that there are two layers of glass that are separated by a small gap.  The double-walled design of the glass espresso cup provides several benefits. First, it helps to insulate the espresso, which keeps it hot for longer periods of time. Second, the double-walled construction keeps the outside of the cup cool to the touch, which makes it comfortable to hold even when the espresso inside is very hot.  The cup is typically small in size, with a capacity of around 2-3 ounces, which is the perfect size for a shot of espresso. The glass is also transparent, which allows you to see the rich, dark color of the espresso as it is poured and consumed.  The double-walled glass espresso cup is often paired with a matching saucer, which provides a stable base for the cup and also provides a place to set a small spoon or biscuit. Overall, the double-walled glass espresso cup is a stylish and functional way to enjoy the rich and complex flavors of a shot of espresso.',
      }),
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Set includes 4 glasses',
        'de-DE': '- Das Set enthält 4 Gläser',
        'en-US': '- Set includes 4 glasses',
      }),
    ]);

export default doubleWalledEspressoGlass01;