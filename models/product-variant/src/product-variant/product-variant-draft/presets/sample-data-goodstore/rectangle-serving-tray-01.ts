import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const rectangleServingTray01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('RST-02')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(599))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Square%20Serving%20Tray-fsN02b33.jpeg'
        )
        .dimensions({ w: 6048, h: 4024 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Hand wash only\n- Natural wood',
        'en-US': '- Hand wash only\n- Natural wood',
        'de-DE': '- Handwäsche nur\n- Naturholz',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'This wooden serving tray is a versatile and functional item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.',
        'en-US':
          'This wooden serving tray is a versatile and functional item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.',
        'de-DE':
          'Dieses Serviertablett aus Holz ist ein vielseitiger und funktionaler Artikel, der in einer Vielzahl von Umgebungen verwendet werden kann. Das für das Tablett verwendete Holzmaterial sorgt für eine warme und natürliche Ästhetik und verleiht jeder Umgebung einen Hauch von rustikalem Charme.  Serviertabletts aus Holz sind leicht zu reinigen und zu pflegen. Sie können mit einem feuchten Tuch und einem milden Reinigungsmittel abgewischt werden und sollten nach Gebrauch gründlich getrocknet werden, um zu verhindern, dass Feuchtigkeit im Inneren eingeschlossen wird.  Insgesamt ist ein Serviertablett aus Holz ein praktisches und attraktives Element, das jedem Ambiente einen Hauch von natürlicher Eleganz verleiht. Seine Langlebigkeit, Vielseitigkeit und Designvielfalt machen ihn zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen, Getränken und anderen Gegenständen.',
      }),
    ]);

export default rectangleServingTray01;
