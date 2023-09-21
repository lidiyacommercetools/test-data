import type { TProductDraft } from '../../../types';
import rattanLoungeChair from './rattan-lounge-chair';
describe(`with rattanLoungeChair preset`, () => {
  it('should return a sample rattanLoungeChair product preset', () => {
    const rattanLoungeChairPreset = rattanLoungeChair().build<TProductDraft>();
    expect(rattanLoungeChairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "rattan-lounge-chair",
      "name": {
            "de-DE": "Rattan-Loungesessel",
            "en-GB": "Rattan Lounge Chair",
            "en-US": "Rattan Lounge Chair"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "rattan-loungesessel",
            "en-GB": "rattan-lounge-chair",
            "en-US": "rattan-lounge-chair"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "vat-standard-eu",
          "typeId": "tax-category",
        },
        {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "masterVariant": {
          "assets": undefined,
          "sku": undefined,
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "attributes": [{"name":"productspec","value":{"en-GB":"- Includes 2 cushions for seat and backrest","de-DE":"- Inklusive 2 Kissen für Sitz und Rückenlehne","en-US":"- Includes 2 cushions for seat and backrest"}},{"name":"product-description","value":{"en-GB":"The Rattan Lounge Chair is designed to provide comfortable seating for relaxing and lounging. The chair features a sturdy frame made of rattan, with a woven pattern of rattan fibers forming the seat and backrest.  The chair comes with additional cushioning for extra comfort, made from soft cotton fabric. The cushions are removable, allowing for easy cleaning or replacement.  The design of the rattan lounge chair is inspired by tropical or bohemian styles, with a natural and earthy look. The chair features intricate woven patterns or geometric shapes, creating a visually interesting texture.  The rattan material used in the construction of the chair is known for its durability and resistance to wear and tear. It is also lightweight, making it easy to move the chair around the room.  Overall, a rattan lounge chair is a stylish and comfortable addition to any living room or outdoor space. Its natural materials and unique design create a relaxed and inviting atmosphere, making it the perfect place to unwind and enjoy some peace and quiet.","en-US":"The Rattan Lounge Chair is designed to provide comfortable seating for relaxing and lounging. The chair features a sturdy frame made of rattan, with a woven pattern of rattan fibers forming the seat and backrest.  The chair comes with additional cushioning for extra comfort, made from soft cotton fabric. The cushions are removable, allowing for easy cleaning or replacement.  The design of the rattan lounge chair is inspired by tropical or bohemian styles, with a natural and earthy look. The chair features intricate woven patterns or geometric shapes, creating a visually interesting texture.  The rattan material used in the construction of the chair is known for its durability and resistance to wear and tear. It is also lightweight, making it easy to move the chair around the room.  Overall, a rattan lounge chair is a stylish and comfortable addition to any living room or outdoor space. Its natural materials and unique design create a relaxed and inviting atmosphere, making it the perfect place to unwind and enjoy some peace and quiet.","de-DE":"Der Rattan Lounge Chair wurde entwickelt, um bequeme Sitzgelegenheiten zum Entspannen und Faulenzen zu bieten. Der Stuhl verfügt über ein stabiles Gestell aus Rattan, mit einem gewebten Muster aus Rattanfasern, das Sitzfläche und Rückenlehne bildet.  Der Stuhl ist mit einer zusätzlichen Polsterung für zusätzlichen Komfort aus weichem Baumwollstoff ausgestattet. Die Kissen sind abnehmbar, was eine einfache Reinigung oder einen einfachen Austausch ermöglicht.  Das Design des Rattan-Loungesessels ist von tropischen oder böhmischen Stilen inspiriert und hat einen natürlichen und erdigen Look. Der Stuhl verfügt über komplizierte Webmuster oder geometrische Formen, die eine optisch interessante Textur erzeugen.  Das für die Konstruktion des Stuhls verwendete Rattanmaterial ist für seine Langlebigkeit und Verschleißfestigkeit bekannt. Außerdem ist er leicht, sodass der Stuhl leicht im Raum bewegt werden kann.  Insgesamt ist ein Rattan-Loungesessel eine stilvolle und bequeme Ergänzung für jedes Wohnzimmer oder jeden Außenbereich. Seine natürlichen Materialien und sein einzigartiges Design schaffen eine entspannte und einladende Atmosphäre und machen es zum perfekten Ort, um sich zu entspannen und etwas Ruhe und Frieden zu genießen."}},{"name":"color","value":{"en-GB":"#EDEBE8","de-DE":"#EDEBE8","en-US":"#EDEBE8"}},{"name":"colorlabel","value":{"en-GB":"Pearl","de-DE":"Perle","en-US":"Pearl"}},{"name":"finishlabel","value":{"en-GB":"Rattan","de-DE":"Rattan","en-US":"Rattan"}},{"name":"color-filter","value":{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}},{"name":"finish","value":{"en-GB":"#E0AC58","de-DE":"#E0AC58","en-US":"#E0AC58"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
