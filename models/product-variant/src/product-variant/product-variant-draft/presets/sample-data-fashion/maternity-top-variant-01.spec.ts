import { TProductVariantDraft } from '../../../types';
import maternityTopVariant01 from './maternity-top-variant-01';

describe(`with maternityTopVariant01 preset`, () => {
  it(`should return a maternityTopVariant01 preset`, () => {
    const maternityTopVariant01Preset =
      maternityTopVariant01().build<TProductVariantDraft>();
    expect(maternityTopVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "size",
            "value": {
              "key": "Small",
              "label": "Small",
            },
          },
          {
            "name": "color",
            "value": {
              "key": "Green",
              "label": "Green",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 300,
              "w": 262,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-__gg4rwo.png",
          },
        ],
        "key": "118716",
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
              "centAmount": 2695,
              "currencyCode": "EUR",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "118716",
      }
    `);
  });

  it(`should return a maternityTopVariant01 preset when built for graphql`, () => {
    const maternityTopVariant01PresetGraphql =
      maternityTopVariant01().buildGraphql<TProductVariantDraft>();
    expect(maternityTopVariant01PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ProductVariantInput",
        "assets": undefined,
        "attributes": [
          {
            "__typename": "ProductAttributeInput",
            "name": "size",
            "value": {
              "key": "Small",
              "label": "Small",
            },
          },
          {
            "__typename": "ProductAttributeInput",
            "name": "color",
            "value": {
              "key": "Green",
              "label": "Green",
            },
          },
        ],
        "images": [
          {
            "__typename": "Image",
            "dimensions": {
              "h": 300,
              "w": 262,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-__gg4rwo.png",
          },
        ],
        "key": "118716",
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
              "centAmount": 2695,
              "currencyCode": "EUR",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "118716",
      }
    `);
  });
});
