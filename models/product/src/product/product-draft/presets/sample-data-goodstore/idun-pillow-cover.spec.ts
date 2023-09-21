import type { TProductDraft } from '../../../types';
import idunPillowCover from './idun-pillow-cover';
describe(`with idunPillowCover preset`, () => {
  it('should return a sample idunPillowCover product preset', () => {
    const idunPillowCoverPreset = idunPillowCover().build<TProductDraft>();
    expect(idunPillowCoverPreset).toMatchInlineSnapshot(`
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
      "key": "idun-pillow-cover",
      "name": {
            "de-DE": "Idun Kissenbezug",
            "en-GB": "Idun Pillow Cover",
            "en-US": "Idun Pillow Cover"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "idun-kissenbezug",
            "en-GB": "idun-pillow-cover",
            "en-US": "idun-pillow-cover"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Machine washable\n- Pillow not included","de-DE":"- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\n- Pillow not included"}},{"name":"product-description","value":{"en-GB":"A brown velvet pillowcase is a type of textile covering for a decorative pillow that is typically used to add visual interest, texture, and a touch of luxury to a room. It is made from a soft and plush velvet fabric, which is known for its smooth surface, rich color, and lustrous sheen.  The pillowcase is designed to fit over a standard size decorative pillow, usually around 18 inches square. It features a square shape and a warm brown color that can complement a variety of decor styles and color schemes.  The velvet fabric has a silky and luxurious feel that adds a touch of sophistication and elegance to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to create a cozy and inviting atmosphere in a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different textures and colors to create a layered and harmonious look.  Overall, a brown velvet pillowcase is a beautiful and indulgent accent piece that can enhance the comfort and style of any room in the home.","en-US":"A brown velvet pillowcase is a type of textile covering for a decorative pillow that is typically used to add visual interest, texture, and a touch of luxury to a room. It is made from a soft and plush velvet fabric, which is known for its smooth surface, rich color, and lustrous sheen.  The pillowcase is designed to fit over a standard size decorative pillow, usually around 18 inches square. It features a square shape and a warm brown color that can complement a variety of decor styles and color schemes.  The velvet fabric has a silky and luxurious feel that adds a touch of sophistication and elegance to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to create a cozy and inviting atmosphere in a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different textures and colors to create a layered and harmonious look.  Overall, a brown velvet pillowcase is a beautiful and indulgent accent piece that can enhance the comfort and style of any room in the home.","de-DE":"Ein brauner Samt-Kissenbezug ist eine Art Textilbezug für ein dekoratives Kissen, das normalerweise verwendet wird, um einem Raum visuelles Interesse, Textur und einen Hauch von Luxus zu verleihen. Es besteht aus einem weichen und plüschigen Samtstoff, der für seine glatte Oberfläche, seine satte Farbe und seinen glänzenden Glanz bekannt ist.  Der Kissenbezug ist so konzipiert, dass er über ein dekoratives Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat. Es hat eine quadratische Form und eine warme braune Farbe, die eine Vielzahl von Einrichtungsstilen und Farbschemata ergänzen kann.  Der Samtstoff fühlt sich seidig und luxuriös an und verleiht dem Kissen einen Hauch von Raffinesse und Eleganz. Die Kanten des Kissenbezugs sind in der Regel mit einem sauberen Saum versehen, der dem Gesamtdesign einen eleganten Look verleiht.  Der Kissenbezug wird oft verwendet, um eine gemütliche und einladende Atmosphäre in einem Raum zu schaffen, egal ob er auf einem Bett, einem Sofa oder einem Akzentstuhl platziert wird. Es kann alleine verwendet oder mit anderen dekorativen Kissen in verschiedenen Texturen und Farben kombiniert werden, um einen mehrschichtigen und harmonischen Look zu schaffen.  Insgesamt ist ein brauner Samt-Kissenbezug ein schönes und nachsichtiges Akzentstück, das den Komfort und Stil jedes Raums im Haus verbessern kann."}},{"name":"color-filter","value":{"key":"#964B00","label":{"de-DE":"Dunkelbraun","en-GB":"Dark Brown","en-US":"Dark Brown"}}},{"name":"color","value":{"en-GB":"#9B614C","de-DE":"#9B614C","en-US":"#9B614C"}},{"name":"colorlabel","value":{"en-GB":"Copper","de-DE":"Kupfer","en-US":"Copper"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
