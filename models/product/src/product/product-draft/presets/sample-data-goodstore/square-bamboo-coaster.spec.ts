import type { TProductDraft } from '../../../types';
import squareBambooCoaster from './square-bamboo-coaster';
describe(`with squareBambooCoaster preset`, () => {
  it('should return a sample squareBambooCoaster product preset', () => {
    const squareBambooCoasterPreset =
      squareBambooCoaster().build<TProductDraft>();
    expect(squareBambooCoasterPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "bar-accessories",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "square-bamboo-coaster",
      "name": {
            "de-DE": "Quadratischer Untersetzer aus Bambus",
            "en-GB": "Square Bamboo Coaster",
            "en-US": "Square Bamboo Coaster"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "quadratischer-untersetzer-aus-bambus",
            "en-GB": "square-bamboo-coaster",
            "en-US": "square-bamboo-coaster"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Wipe clean with wet cloth\n- Set includes 4 coaster","de-DE":"- Mit einem feuchten Tuch abwischen\n- Das Set enthält 4 Untersetzer","en-US":"- Wipe clean with wet cloth\n- Set includes 4 coaster"}},{"name":"product-description","value":{"de-DE":"Ein quadratischer Untersetzer aus Bambus ist eine kleine Matte, die verwendet wird, um Oberflächen vor Wasserflecken oder Beschädigungen durch Trinkgläser oder Tassen zu schützen. Es besteht aus natürlichem Bambusmaterial und hat eine glatte Oberfläche. Der Untersetzer hat eine quadratische Form mit leicht abgerundeten Kanten und misst etwa 3,5 Zoll x 3,5 Zoll. Seine leichte und strapazierfähige Beschaffenheit machen es zu einer beliebten Wahl für legere und formelle Anlässe gleichermaßen.","en-GB":"A square bamboo coaster is a small mat used to protect surfaces from water stains or damage caused by drinking glasses or mugs. It is made of natural bamboo material and has a smooth surface. The coaster is square in shape with slightly rounded edges, and measures approximately 3.5 inches by 3.5 inches. Its lightweight and durable nature make it a popular choice for casual and formal occasions alike.","en-US":"A square bamboo coaster is a small mat used to protect surfaces from water stains or damage caused by drinking glasses or mugs. It is made of natural bamboo material and has a smooth surface. The coaster is square in shape with slightly rounded edges, and measures approximately 3.5 inches by 3.5 inches. Its lightweight and durable nature make it a popular choice for casual and formal occasions alike."}},{"name":"color-filter","value":{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
