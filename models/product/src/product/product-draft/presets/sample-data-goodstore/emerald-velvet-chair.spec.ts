import type { TProductDraft } from '../../../types';
import emeraldVelvetChair from './emerald-velvet-chair';
describe(`with emeraldVelvetChair preset`, () => {
  it('should return a sample emeraldVelvetChair product preset', () => {
    const emeraldVelvetChairPreset =
      emeraldVelvetChair().build<TProductDraft>();
    expect(emeraldVelvetChairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "emerald-velvet-chair",
      "name": {
            "de-DE": "Smaragdgrüner Samtstuhl",
            "en-GB": "Emerald Velvet Chair",
            "en-US": "Emerald Velvet Chair"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "smaragdgrner-samtstuhl",
            "en-GB": "emerald-velvet-chair",
            "en-US": "emerald-velvet-chair"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Dry clean only","de-DE":"- Nur chemische Reinigung","en-US":"- Dry clean only"}},{"name":"product-description","value":{"en-GB":"A velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The emerald color of the velvet fabric is soft and delicate, adding a touch of femininity to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.","en-US":"A velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The emerald color of the velvet fabric is soft and delicate, adding a touch of femininity to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.","de-DE":"Ein Samtstuhl mit Messinggestell ist ein elegantes und luxuriöses Möbelstück. Das weiche, plüschige Samtmaterial des Stuhls sorgt für ein bequemes und gemütliches Sitzerlebnis. Die smaragdgrüne Farbe des Samtstoffs ist weich und zart und verleiht dem Gesamtbild des Stuhls einen Hauch von Weiblichkeit.  Der Messingrahmen des Stuhls ist robust und langlebig und bietet eine solide Grundlage für den Sitzbereich. Die Messingfarbe des Gestells verleiht dem Gesamtbild des Stuhls einen Hauch von Wärme und Raffinesse. Die Kombination aus Samt und Messingrahmen schafft einen auffälligen Kontrast und macht diesen Stuhl zu einem Statement-Piece in jedem Raum.  Der Stuhl verfügt über eine hohe Rückenlehne mit geschwungenem Design, die Rücken und Schultern stützt. Der Stuhl ist sowohl auf Stil als auch auf Komfort ausgelegt, was ihn zu einer großartigen Ergänzung für jedes Wohnzimmer, Schlafzimmer oder Büro macht."}},{"name":"colorlabel","value":{"en-GB":"Emerald","de-DE":"Smaragd","en-US":"Emerald"}},{"name":"color","value":{"en-GB":"#219A0E","de-DE":"#219A0E","en-US":"#219A0E"}},{"name":"finishlabel","value":{"en-GB":"Gold","de-DE":"Gold","en-US":"Gold"}},{"name":"finish","value":{"en-GB":"#F8EE18","de-DE":"#F8EE18","en-US":"#F8EE18"}},{"name":"color-filter","value":{"key":"#00FF00","label":{"de-DE":"Grün","en-GB":"Green","en-US":"Green"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});