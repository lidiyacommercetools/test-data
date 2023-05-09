import type { TProductDraft } from '../../../types';
import halloweenTop from './halloween-top';

describe(`with halloweenTop preset`, () => {
  it('should return a sample halloweenTop product preset', () => {
    const halloweenTopPreset = halloweenTop().build<TProductDraft>();
    expect(halloweenTopPreset).toMatchInlineSnapshot(`
      {
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "Halloween Top",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "size",
              "value": {
                "key": "Medium",
                "label": "Medium",
              },
            },
            {
              "name": "color",
              "value": {
                "key": "Purple",
                "label": "Purple",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 235,
                "w": 215,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/purple-5xg50uIz.png",
            },
          ],
          "key": "888035",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 2500,
                "currencyCode": "EUR",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 2500,
                "currencyCode": "USD",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
            {
              "channel": undefined,
              "country": "ES",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 2500,
                "currencyCode": "EUR",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
          ],
          "sku": "888035",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Halloween Top",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "shirts",
          "typeId": "product-type",
        },
        "publish": false,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "sample-halloween-top",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "size",
                "value": {
                  "key": "Large",
                  "label": "Large",
                },
              },
              {
                "name": "color",
                "value": {
                  "key": "Multi-Color",
                  "label": "Multi-Color",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 700,
                  "w": 900,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/multi-TjZTRFuz.jpeg",
              },
            ],
            "key": "828329",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 3000,
                  "currencyCode": "EUR",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
              {
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 3000,
                  "currencyCode": "USD",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
              {
                "channel": undefined,
                "country": "ES",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 3300,
                  "currencyCode": "EUR",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
            ],
            "sku": "828329",
          },
        ],
      }
    `);
  });

  it('should return a sample halloweenTop product preset when built for graphql', () => {
    const halloweenTopPresetGraphql =
      halloweenTop().buildGraphql<TProductDraft>();
    expect(halloweenTopPresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ProductDraft",
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "Halloween Top",
        "masterVariant": {
          "__typename": "ProductVariantInput",
          "assets": undefined,
          "attributes": [
            {
              "__typename": "ProductAttributeInput",
              "name": "size",
              "value": {
                "key": "Medium",
                "label": "Medium",
              },
            },
            {
              "__typename": "ProductAttributeInput",
              "name": "color",
              "value": {
                "key": "Purple",
                "label": "Purple",
              },
            },
          ],
          "images": [
            {
              "__typename": "Image",
              "dimensions": {
                "h": 235,
                "w": 215,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/purple-5xg50uIz.png",
            },
          ],
          "key": "888035",
          "prices": [
            {
              "__typename": "ProductPriceDataInput",
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "__typename": "MoneyInput",
                "centAmount": 2500,
                "currencyCode": "EUR",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
            {
              "__typename": "ProductPriceDataInput",
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "__typename": "MoneyInput",
                "centAmount": 2500,
                "currencyCode": "USD",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
            {
              "__typename": "ProductPriceDataInput",
              "channel": undefined,
              "country": "ES",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "__typename": "MoneyInput",
                "centAmount": 2500,
                "currencyCode": "EUR",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
          ],
          "sku": "888035",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sample Halloween Top",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "__typename": "Reference",
          "key": "shirts",
          "typeId": "product-type",
        },
        "publish": false,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "sample-halloween-top",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "__typename": "Reference",
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "__typename": "ProductVariantInput",
            "assets": undefined,
            "attributes": [
              {
                "__typename": "ProductAttributeInput",
                "name": "size",
                "value": {
                  "key": "Large",
                  "label": "Large",
                },
              },
              {
                "__typename": "ProductAttributeInput",
                "name": "color",
                "value": {
                  "key": "Multi-Color",
                  "label": "Multi-Color",
                },
              },
            ],
            "images": [
              {
                "__typename": "Image",
                "dimensions": {
                  "h": 700,
                  "w": 900,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/multi-TjZTRFuz.jpeg",
              },
            ],
            "key": "828329",
            "prices": [
              {
                "__typename": "ProductPriceDataInput",
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "__typename": "MoneyInput",
                  "centAmount": 3000,
                  "currencyCode": "EUR",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
              {
                "__typename": "ProductPriceDataInput",
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "__typename": "MoneyInput",
                  "centAmount": 3000,
                  "currencyCode": "USD",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
              {
                "__typename": "ProductPriceDataInput",
                "channel": undefined,
                "country": "ES",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "__typename": "MoneyInput",
                  "centAmount": 3300,
                  "currencyCode": "EUR",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
            ],
            "sku": "828329",
          },
        ],
      }
    `);
  });
});