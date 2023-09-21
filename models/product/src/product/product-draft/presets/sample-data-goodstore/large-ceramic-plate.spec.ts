import type { TProductDraft } from '../../../types';
import largeCeramicPlate from './large-ceramic-plate';
describe(`with largeCeramicPlate preset`, () => {
  it('should return a sample largeCeramicPlate product preset', () => {
    const largeCeramicPlatePreset = largeCeramicPlate().build<TProductDraft>();
    expect(largeCeramicPlatePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "plates",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "large-ceramic-plate",
      "name": {
            "en-US": "Large Ceramic Plate",
            "en-GB": "Large Ceramic Plate",
            "de-DE": "Große Keramikplatte"
          },
      "metaTitle": {
            "en-US": "",
            "de-DE": ""
          },
      "searchKeywords": {},
      "slug": {
            "en-US": "large-ceramic-plate",
            "de-DE": "groe-keramikplatte",
            "en-GB": "large-ceramic-plate"
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
          "attributes": [{"name":"color","value":{"en-US":"#d8deb1","en-GB":"#d8deb1","de-DE":"#d8deb1"}},{"name":"colorlabel","value":{"en-US":"Light Olive ","en-GB":"Light Olive ","de-DE":"Light Olive "}},{"name":"productspec","value":{"en-US":"- Ceramic\n- Sold as 1 piece\n- Dishwasher safe","en-GB":"- Ceramic\n- Sold as 1 piece\n- Dishwasher safe\n- Microwave safe","de-DE":"- Ceramic\n- Sold as 1 piece\n- Dishwasher safe"}},{"name":"product-description","value":{"en-GB":"A large ceramic round plate that comes in light olive and light gray colors is a beautiful and versatile piece of dinnerware that is perfect for serving a variety of meals. The plate is typically handcrafted from high-quality ceramic material, and features a glossy finish that gives it a polished and elegant appearance.  The plate is large in size, typically measuring around 12-14 inches in diameter. This makes it ideal for serving large portions of food, such as a main course or a shared appetizer. The round shape of the plate provides ample space for arranging food, while the raised edge of the plate prevents sauces and juices from spilling over the sides.  The plate comes in two beautiful and neutral colors - light olive and light gray. These colors are perfect for complementing a wide range of dining room decor styles and color schemes, from modern and minimalist to rustic and earthy.  The plate features a simple and elegant design, with a smooth surface and a minimalist look. This makes it ideal for both casual and formal dining occasions, from everyday family meals to special occasions and dinner parties.  Overall, a large ceramic round plate in light olive and light gray colors is a beautiful and practical addition to any dining room. Its simple and elegant design, combined with its versatile size and color options, make it a perfect choice for serving a variety of meals and creating a stylish and inviting dining experience.","en-US":"A large ceramic round plate that comes in light olive and light gray colors is a beautiful and versatile piece of dinnerware that is perfect for serving a variety of meals. The plate is typically handcrafted from high-quality ceramic material, and features a glossy finish that gives it a polished and elegant appearance.  The plate is large in size, typically measuring around 12-14 inches in diameter. This makes it ideal for serving large portions of food, such as a main course or a shared appetizer. The round shape of the plate provides ample space for arranging food, while the raised edge of the plate prevents sauces and juices from spilling over the sides.  The plate comes in two beautiful and neutral colors - light olive and light gray. These colors are perfect for complementing a wide range of dining room decor styles and color schemes, from modern and minimalist to rustic and earthy.  The plate features a simple and elegant design, with a smooth surface and a minimalist look. This makes it ideal for both casual and formal dining occasions, from everyday family meals to special occasions and dinner parties.  Overall, a large ceramic round plate in light olive and light gray colors is a beautiful and practical addition to any dining room. Its simple and elegant design, combined with its versatile size and color options, make it a perfect choice for serving a variety of meals and creating a stylish and inviting dining experience.","de-DE":"Ein großer runder Keramikteller in Helloliv und Hellgrau ist ein schönes und vielseitiges Geschirr, das sich perfekt zum Servieren einer Vielzahl von Mahlzeiten eignet. Der Teller wird in der Regel aus hochwertigem Keramikmaterial handgefertigt und verfügt über eine glänzende Oberfläche, die ihm ein poliertes und elegantes Aussehen verleiht.  Die Platte ist groß und hat typischerweise einen Durchmesser von etwa 12 bis 14 Zoll. Dadurch eignet er sich ideal zum Servieren großer Speisenportionen, wie z. B. eines Hauptgerichts oder einer gemeinsamen Vorspeise. Die runde Form des Tellers bietet viel Platz zum Anrichten von Speisen, während der erhöhte Rand des Tellers verhindert, dass Saucen und Säfte über die Seiten schwappen.  Der Teller ist in zwei schönen und neutralen Farben erhältlich - Helloliv und Hellgrau. Diese Farben sind perfekt, um eine breite Palette von Einrichtungsstilen und Farbschemata für Esszimmer zu ergänzen, von modern und minimalistisch bis rustikal und erdig.  Der Teller zeichnet sich durch ein schlichtes und elegantes Design mit glatter Oberfläche und einem minimalistischen Look aus. Dies macht es ideal für zwanglose und formelle Anlässe, von alltäglichen Familienessen bis hin zu besonderen Anlässen und Dinnerpartys.  Insgesamt ist ein großer runder Keramikteller in hellen Oliv- und Hellgrautönen eine schöne und praktische Ergänzung für jedes Esszimmer. Sein schlichtes und elegantes Design, kombiniert mit seinen vielseitigen Größen- und Farboptionen, machen ihn zur perfekten Wahl, um eine Vielzahl von Mahlzeiten zu servieren und ein stilvolles und einladendes Speiseerlebnis zu schaffen."}},{"name":"color-filter","value":{"key":"#00FF00","label":{"de-DE":"Grün","en-GB":"Green","en-US":"Green"}}}],
        },
        "variants": [
        {
          "assets": undefined,
          "sku": undefined,
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "attributes": [{"name":"color","value":{"en-US":"#ebebeb","en-GB":"#ebebeb","de-DE":"#ebebeb"}},{"name":"colorlabel","value":{"en-US":"Light Gray","en-GB":"Light Gray","de-DE":"Light Gray"}},{"name":"productspec","value":{"en-US":"- Ceramic\n- Sold as 1 piece\n- Dishwasher safe","en-GB":"- Ceramic\n- Sold as 1 piece\n- Dishwasher safe\n- Microwave safe","de-DE":"- Ceramic\n- Sold as 1 piece\n- Dishwasher safe"}},{"name":"product-description","value":{"en-GB":"A large ceramic round plate that comes in light olive and light gray colors is a beautiful and versatile piece of dinnerware that is perfect for serving a variety of meals. The plate is typically handcrafted from high-quality ceramic material, and features a glossy finish that gives it a polished and elegant appearance.  The plate is large in size, typically measuring around 12-14 inches in diameter. This makes it ideal for serving large portions of food, such as a main course or a shared appetizer. The round shape of the plate provides ample space for arranging food, while the raised edge of the plate prevents sauces and juices from spilling over the sides.  The plate comes in two beautiful and neutral colors - light olive and light gray. These colors are perfect for complementing a wide range of dining room decor styles and color schemes, from modern and minimalist to rustic and earthy.  The plate features a simple and elegant design, with a smooth surface and a minimalist look. This makes it ideal for both casual and formal dining occasions, from everyday family meals to special occasions and dinner parties.  Overall, a large ceramic round plate in light olive and light gray colors is a beautiful and practical addition to any dining room. Its simple and elegant design, combined with its versatile size and color options, make it a perfect choice for serving a variety of meals and creating a stylish and inviting dining experience.","en-US":"A large ceramic round plate that comes in light olive and light gray colors is a beautiful and versatile piece of dinnerware that is perfect for serving a variety of meals. The plate is typically handcrafted from high-quality ceramic material, and features a glossy finish that gives it a polished and elegant appearance.  The plate is large in size, typically measuring around 12-14 inches in diameter. This makes it ideal for serving large portions of food, such as a main course or a shared appetizer. The round shape of the plate provides ample space for arranging food, while the raised edge of the plate prevents sauces and juices from spilling over the sides.  The plate comes in two beautiful and neutral colors - light olive and light gray. These colors are perfect for complementing a wide range of dining room decor styles and color schemes, from modern and minimalist to rustic and earthy.  The plate features a simple and elegant design, with a smooth surface and a minimalist look. This makes it ideal for both casual and formal dining occasions, from everyday family meals to special occasions and dinner parties.  Overall, a large ceramic round plate in light olive and light gray colors is a beautiful and practical addition to any dining room. Its simple and elegant design, combined with its versatile size and color options, make it a perfect choice for serving a variety of meals and creating a stylish and inviting dining experience.","de-DE":"Ein großer runder Keramikteller in Helloliv und Hellgrau ist ein schönes und vielseitiges Geschirr, das sich perfekt zum Servieren einer Vielzahl von Mahlzeiten eignet. Der Teller wird in der Regel aus hochwertigem Keramikmaterial handgefertigt und verfügt über eine glänzende Oberfläche, die ihm ein poliertes und elegantes Aussehen verleiht.  Die Platte ist groß und hat typischerweise einen Durchmesser von etwa 12 bis 14 Zoll. Dadurch eignet er sich ideal zum Servieren großer Speisenportionen, wie z. B. eines Hauptgerichts oder einer gemeinsamen Vorspeise. Die runde Form des Tellers bietet viel Platz zum Anrichten von Speisen, während der erhöhte Rand des Tellers verhindert, dass Saucen und Säfte über die Seiten schwappen.  Der Teller ist in zwei schönen und neutralen Farben erhältlich - Helloliv und Hellgrau. Diese Farben sind perfekt, um eine breite Palette von Einrichtungsstilen und Farbschemata für Esszimmer zu ergänzen, von modern und minimalistisch bis rustikal und erdig.  Der Teller zeichnet sich durch ein schlichtes und elegantes Design mit glatter Oberfläche und einem minimalistischen Look aus. Dies macht es ideal für zwanglose und formelle Anlässe, von alltäglichen Familienessen bis hin zu besonderen Anlässen und Dinnerpartys.  Insgesamt ist ein großer runder Keramikteller in hellen Oliv- und Hellgrautönen eine schöne und praktische Ergänzung für jedes Esszimmer. Sein schlichtes und elegantes Design, kombiniert mit seinen vielseitigen Größen- und Farboptionen, machen ihn zur perfekten Wahl, um eine Vielzahl von Mahlzeiten zu servieren und ein stilvolles und einladendes Speiseerlebnis zu schaffen."}},{"name":"color-filter","value":{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}}],
        }
       ]
      }
    `);
  });
});
