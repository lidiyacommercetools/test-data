import type { TProductDraft } from '../../../types';
import luxePillowCover from './luxe-pillow-cover';
describe(`with luxePillowCover preset`, () => {
  it('should return a sample luxePillowCover product preset', () => {
    const luxePillowCoverPreset = luxePillowCover().build<TProductDraft>();
    expect(luxePillowCoverPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedding",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "luxe-pillow-cover",
      "name": {
            "de-DE": "Luxuriöser Kissenbezug",
            "en-GB": "Luxe Pillow Cover",
            "en-US": "Luxe Pillow Cover"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "luxuriser-kissenbezug",
            "en-GB": "luxe-pillow-cover",
            "en-US": "luxe-pillow-cover"
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
          "attributes": [{"name":"product-description","value":{"de-DE":"Dieser luxuriöse Kissenbezug ist aus schwarzem Lammfell gefertigt. Shearling ist bekannt für seine Weichheit, Wärme und isolierenden Eigenschaften.  Der Kissenbezug ist so konzipiert, dass er über ein Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat. Es hat eine quadratische Form und eine tiefschwarze Farbe, die eine Vielzahl von Einrichtungsstilen und Farbschemata ergänzen kann.  Der Shearling-Stoff hat eine plüschige und flauschige Textur, die sich unglaublich weich anfühlt. Es bietet eine gemütliche und warme Oberfläche zum Schlafen oder Faulenzen, was es zu einer beliebten Wahl für die kälteren Monate macht.  Der Kissenbezug wird oft wegen seiner dekorativen und luxuriösen Eigenschaften sowie wegen seiner praktischen und funktionalen Vorteile verwendet. Es kann einem Bett, Sofa oder Akzentstuhl einen Hauch von Textur und visuellem Interesse verleihen und gleichzeitig eine bequeme und stützende Oberfläche für Kopf und Nacken bieten.  Das Shearling-Gewebe ist von Natur aus wasser- und schmutzabweisend und lässt sich leicht mit einem feuchten Tuch oder Schwamm reinigen. Es sollte regelmäßig an der Luft getrocknet und aufgelockert werden, um seine Form und Textur zu erhalten.  Insgesamt ist ein schwarzer Lammfell-Kissenbezug ein stilvolles und bequemes Accessoire, das den Komfort und Stil jedes Raums im Haus verbessern kann und gleichzeitig einen praktischen und funktionellen Nutzen bietet.","en-GB":"This Luxe Pillow Cover is made of black shearling. Shearling is known for its softness, warmth, and insulating properties.  The pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and a deep black color that can complement a variety of decor styles and color schemes.  The shearling fabric has a plush and fluffy texture that is incredibly soft to the touch. It provides a cozy and warm surface for sleeping or lounging, making it a popular choice for colder months.  The pillow cover is often used for its decorative and luxurious features, as well as for its practical and functional benefits. It can add a touch of texture and visual interest to a bed, sofa, or accent chair, while also providing a comfortable and supportive surface for the head and neck.  The shearling fabric is naturally resistant to water and stains, and can be easily cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, a black shearling pillow cover is a stylish and comfortable accessory that can enhance the comfort and style of any room in the home, while also providing a practical and functional benefit.","en-US":"This Luxe Pillow Cover is made of black shearling. Shearling is known for its softness, warmth, and insulating properties.  The pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and a deep black color that can complement a variety of decor styles and color schemes.  The shearling fabric has a plush and fluffy texture that is incredibly soft to the touch. It provides a cozy and warm surface for sleeping or lounging, making it a popular choice for colder months.  The pillow cover is often used for its decorative and luxurious features, as well as for its practical and functional benefits. It can add a touch of texture and visual interest to a bed, sofa, or accent chair, while also providing a comfortable and supportive surface for the head and neck.  The shearling fabric is naturally resistant to water and stains, and can be easily cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, a black shearling pillow cover is a stylish and comfortable accessory that can enhance the comfort and style of any room in the home, while also providing a practical and functional benefit."}},{"name":"color-filter","value":{"key":"#000","label":{"de-DE":"Schwarz","en-GB":"Black","en-US":"Black"}}},{"name":"color","value":{"en-GB":"#000","de-DE":"#000","en-US":"#000"}},{"name":"colorlabel","value":{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}},{"name":"productspec","value":{"en-GB":"- Machine washable\n- Pillow not included","de-DE":"- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\n- Pillow not included"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
