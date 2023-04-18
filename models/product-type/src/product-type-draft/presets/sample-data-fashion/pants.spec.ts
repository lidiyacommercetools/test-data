import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import pants from './pants';

describe(`with pants preset`, () => {
  it(`should create a pants product type draft`, () => {
    const pantsProductType = pants().build<TProductTypeDraft>();
    expect(pantsProductType.name).toMatchInlineSnapshot(`"Pants"`);
    expect(pantsProductType.key).toMatchInlineSnapshot(`"pants"`);
    expect(pantsProductType.description).toMatchInlineSnapshot(`"Pants"`);
    expect(pantsProductType.attributes).toMatchInlineSnapshot(`
      [
        {
          "attributeConstraint": "None",
          "inputHint": "SingleLine",
          "inputTip": {
            "de": undefined,
            "en": undefined,
            "en-US": "Size",
            "fr": undefined,
          },
          "isRequired": true,
          "isSearchable": true,
          "label": {
            "de": undefined,
            "en": undefined,
            "en-US": "Size",
            "fr": undefined,
          },
          "name": "size",
          "type": {
            "name": "enum",
            "values": [
              {
                "key": "Small",
                "label": "Small",
              },
              {
                "key": "Medium",
                "label": "Medium",
              },
              {
                "key": "Large",
                "label": "Large",
              },
            ],
          },
        },
        {
          "attributeConstraint": "None",
          "inputHint": "SingleLine",
          "inputTip": {
            "de": undefined,
            "en": undefined,
            "en-US": "Fit",
            "fr": undefined,
          },
          "isRequired": false,
          "isSearchable": true,
          "label": {
            "de": undefined,
            "en": undefined,
            "en-US": "Fit",
            "fr": undefined,
          },
          "name": "fit",
          "type": {
            "name": "enum",
            "values": [
              {
                "key": "Slim",
                "label": "Slim",
              },
              {
                "key": "Straight",
                "label": "Straight",
              },
              {
                "key": "Flair",
                "label": "Flair",
              },
            ],
          },
        },
        {
          "attributeConstraint": "None",
          "inputHint": "SingleLine",
          "inputTip": {
            "de": undefined,
            "en": undefined,
            "en-US": "Color",
            "fr": undefined,
          },
          "isRequired": false,
          "isSearchable": true,
          "label": {
            "de": undefined,
            "en": undefined,
            "en-US": "Color",
            "fr": undefined,
          },
          "name": "color",
          "type": {
            "name": "enum",
            "values": [
              {
                "key": "Blue",
                "label": "Blue",
              },
              {
                "key": "Black",
                "label": "Black",
              },
              {
                "key": "White",
                "label": "White",
              },
            ],
          },
        },
        {
          "attributeConstraint": "None",
          "inputHint": "SingleLine",
          "inputTip": {
            "de": undefined,
            "en": undefined,
            "en-US": "Length",
            "fr": undefined,
          },
          "isRequired": false,
          "isSearchable": false,
          "label": {
            "de": undefined,
            "en": undefined,
            "en-US": "Length",
            "fr": undefined,
          },
          "name": "length",
          "type": {
            "name": "enum",
            "values": [
              {
                "key": "Ankle",
                "label": "Ankle",
              },
              {
                "key": "Crop",
                "label": "Crop",
              },
              {
                "key": "Extra Long",
                "label": "Extra Long",
              },
            ],
          },
        },
      ]
    `);
  });

  it(`should create a pants product type draft when built for graphql`, () => {
    const pantsProductTypeGraphql =
      pants().buildGraphql<TProductTypeDraftGraphql>();
    expect(pantsProductTypeGraphql.name).toMatchInlineSnapshot(`"Pants"`);
    expect(pantsProductTypeGraphql.key).toMatchInlineSnapshot(`"pants"`);
    expect(pantsProductTypeGraphql.description).toMatchInlineSnapshot(
      `"Pants"`
    );
    expect(pantsProductTypeGraphql.attributeDefinitions).toMatchInlineSnapshot(`
      [
        {
          "__typename": "AttributeDefinitionDraft",
          "attributeConstraint": "None",
          "inputHint": "SingleLine",
          "inputTip": [
            {
              "__typename": "LocalizedString",
              "locale": "en-US",
              "value": "Size",
            },
          ],
          "isRequired": true,
          "isSearchable": true,
          "label": [
            {
              "__typename": "LocalizedString",
              "locale": "en-US",
              "value": "Size",
            },
          ],
          "name": "size",
          "type": {
            "__typename": "enum",
            "name": "enum",
            "values": [
              {
                "key": "Small",
                "label": "Small",
              },
              {
                "key": "Medium",
                "label": "Medium",
              },
              {
                "key": "Large",
                "label": "Large",
              },
            ],
          },
        },
        {
          "__typename": "AttributeDefinitionDraft",
          "attributeConstraint": "None",
          "inputHint": "SingleLine",
          "inputTip": [
            {
              "__typename": "LocalizedString",
              "locale": "en-US",
              "value": "Fit",
            },
          ],
          "isRequired": false,
          "isSearchable": true,
          "label": [
            {
              "__typename": "LocalizedString",
              "locale": "en-US",
              "value": "Fit",
            },
          ],
          "name": "fit",
          "type": {
            "__typename": "enum",
            "name": "enum",
            "values": [
              {
                "key": "Slim",
                "label": "Slim",
              },
              {
                "key": "Straight",
                "label": "Straight",
              },
              {
                "key": "Flair",
                "label": "Flair",
              },
            ],
          },
        },
        {
          "__typename": "AttributeDefinitionDraft",
          "attributeConstraint": "None",
          "inputHint": "SingleLine",
          "inputTip": [
            {
              "__typename": "LocalizedString",
              "locale": "en-US",
              "value": "Color",
            },
          ],
          "isRequired": false,
          "isSearchable": true,
          "label": [
            {
              "__typename": "LocalizedString",
              "locale": "en-US",
              "value": "Color",
            },
          ],
          "name": "color",
          "type": {
            "__typename": "enum",
            "name": "enum",
            "values": [
              {
                "key": "Blue",
                "label": "Blue",
              },
              {
                "key": "Black",
                "label": "Black",
              },
              {
                "key": "White",
                "label": "White",
              },
            ],
          },
        },
        {
          "__typename": "AttributeDefinitionDraft",
          "attributeConstraint": "None",
          "inputHint": "SingleLine",
          "inputTip": [
            {
              "__typename": "LocalizedString",
              "locale": "en-US",
              "value": "Length",
            },
          ],
          "isRequired": false,
          "isSearchable": false,
          "label": [
            {
              "__typename": "LocalizedString",
              "locale": "en-US",
              "value": "Length",
            },
          ],
          "name": "length",
          "type": {
            "__typename": "enum",
            "name": "enum",
            "values": [
              {
                "key": "Ankle",
                "label": "Ankle",
              },
              {
                "key": "Crop",
                "label": "Crop",
              },
              {
                "key": "Extra Long",
                "label": "Extra Long",
              },
            ],
          },
        },
      ]
    `);
  });
});
