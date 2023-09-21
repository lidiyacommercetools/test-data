import type { TProductDraft } from '../../../types';
import orionDoubleBed from './orion-double-bed';
describe(`with orionDoubleBed preset`, () => {
  it('should return a sample orionDoubleBed product preset', () => {
    const orionDoubleBedPreset = orionDoubleBed().build<TProductDraft>();
    expect(orionDoubleBedPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "beds",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "orion-double-bed",
      "name": {
            "de-DE": "Orion Doppelbett",
            "en-GB": "Orion Double Bed",
            "en-US": "Orion Double Bed"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "orion-doppelbett",
            "en-GB": "orion-double-bed",
            "en-US": "orion-double-bed"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Assembly included at delivery\n- Mattress not included","de-DE":"- Montage im Lieferumfang enthalten\n- Matratze nicht im Lieferumfang enthalten","en-US":"- Assembly included at delivery\n- Mattress not included"}},{"name":"product-description","value":{"en-GB":"A queen bed with a tufted headboard and platform and steel legs is a modern and stylish piece of furniture. The headboard is tall and wide, featuring a tufted design. The fabric used for the headboard is soft and luxurious, providing a comfortable place to lean against when sitting up in bed.  The bed is raised off the ground on a platform, which is supported by sleek and sturdy steel legs. The platform provides a solid and stable foundation for the mattress, while also giving the bed a clean and minimalist look.   Overall, this queen bed is a beautiful and functional piece that would be perfect for a modern bedroom with a minimalist or industrial aesthetic.","en-US":"A queen bed with a tufted headboard and platform and steel legs is a modern and stylish piece of furniture. The headboard is tall and wide, featuring a tufted design. The fabric used for the headboard is soft and luxurious, providing a comfortable place to lean against when sitting up in bed.  The bed is raised off the ground on a platform, which is supported by sleek and sturdy steel legs. The platform provides a solid and stable foundation for the mattress, while also giving the bed a clean and minimalist look.   Overall, this queen bed is a beautiful and functional piece that would be perfect for a modern bedroom with a minimalist or industrial aesthetic.","de-DE":"Ein Queensize-Bett mit getuftetem Kopfteil und Plattform sowie Stahlbeinen ist ein modernes und stilvolles Möbelstück. Das Kopfteil ist hoch und breit und hat ein getuftetes Design. Der für das Kopfteil verwendete Stoff ist weich und luxuriös und bietet einen bequemen Platz zum Anlehnen, wenn man sich im Bett aufrichtet.  Das Bett wird vom Boden auf einer Plattform angehoben, die von schlanken und robusten Stahlbeinen getragen wird. Die Plattform bietet eine solide und stabile Grundlage für die Matratze und verleiht dem Bett gleichzeitig ein sauberes und minimalistisches Aussehen.  Insgesamt ist dieses Queensize-Bett ein schönes und funktionales Stück, das sich perfekt für ein modernes Schlafzimmer mit minimalistischer oder industrieller Ästhetik eignet."}},{"name":"colorlabel","value":{"en-GB":"Sage","de-DE":"Salbei","en-US":"Sage"}},{"name":"color","value":{"en-GB":"#718C86","de-DE":"#718C86","en-US":"#718C86"}},{"name":"finishlabel","value":{"en-GB":"Steel","de-DE":"Stahl","en-US":"Steel"}},{"name":"finish","value":{"en-GB":"#CCCCCC ","de-DE":"#CCCCCC ","en-US":"#CCCCCC "}},{"name":"color-filter","value":{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
