import { TCartDraft } from '../../../types';
import jamieDoe01 from './jamie-doe-01';

describe('with the preset cart `jamieDoe01`', () => {
  it('should return a cart discount draft', () => {
    const cartDraft = jamieDoe01().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Mainville",
          "company": undefined,
          "country": "US",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Jamie",
          "id": undefined,
          "key": undefined,
          "lastName": "Doe",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "56789",
          "region": undefined,
          "salutation": undefined,
          "state": "New Jersey",
          "streetName": "Main Street",
          "streetNumber": "1",
          "title": undefined,
        },
        "businessUnit": undefined,
        "country": "US",
        "currency": "USD",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "jamie.doe@example.com",
        "customerGroup": {
          "key": "vip",
          "typeId": "customer-group",
        },
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": undefined,
        "itemShippingAddresses": undefined,
        "key": "jamie-01-cart",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": undefined,
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "productId": undefined,
            "quantity": 2,
            "shippingDetails": undefined,
            "sku": "718289",
            "supplyChannel": undefined,
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": undefined,
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "productId": undefined,
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "855485",
            "supplyChannel": undefined,
            "variantId": undefined,
          },
        ],
        "locale": undefined,
        "origin": "Merchant",
        "shipping": undefined,
        "shippingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Mainville",
          "company": undefined,
          "country": "US",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Jamie",
          "id": undefined,
          "key": undefined,
          "lastName": "Doe",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "56789",
          "region": undefined,
          "salutation": undefined,
          "state": "New Jersey",
          "streetName": "Main Street",
          "streetNumber": "1",
          "title": undefined,
        },
        "shippingMethod": undefined,
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": undefined,
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });

  it('should return a cart discount draft when build for GraphQL', () => {
    const cartDraft = jamieDoe01().buildGraphql<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Mainville",
          "company": undefined,
          "country": "US",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Jamie",
          "id": undefined,
          "key": undefined,
          "lastName": "Doe",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "56789",
          "region": undefined,
          "salutation": undefined,
          "state": "New Jersey",
          "streetName": "Main Street",
          "streetNumber": "1",
          "title": undefined,
        },
        "businessUnit": undefined,
        "country": "US",
        "currency": "USD",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "jamie.doe@example.com",
        "customerGroup": {
          "__typename": "Reference",
          "key": "vip",
          "typeId": "customer-group",
        },
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": undefined,
        "itemShippingAddresses": undefined,
        "key": "jamie-01-cart",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": undefined,
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "productId": undefined,
            "quantity": 2,
            "shippingDetails": undefined,
            "sku": "718289",
            "supplyChannel": undefined,
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": undefined,
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "productId": undefined,
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "855485",
            "supplyChannel": undefined,
            "variantId": undefined,
          },
        ],
        "locale": undefined,
        "origin": "Merchant",
        "shipping": undefined,
        "shippingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Mainville",
          "company": undefined,
          "country": "US",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Jamie",
          "id": undefined,
          "key": undefined,
          "lastName": "Doe",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "56789",
          "region": undefined,
          "salutation": undefined,
          "state": "New Jersey",
          "streetName": "Main Street",
          "streetNumber": "1",
          "title": undefined,
        },
        "shippingMethod": undefined,
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": undefined,
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });
});
