import { TCartDraft } from '../../../types';
import sampleUsa01 from './sample-usa-01';

describe('with the preset cart `sampleUsa01`', () => {
  it('should return a cart discount draft', () => {
    const cartDraft = sampleUsa01(
      '9b3ea3f7-9858-4dc5-bf5c-9ac66e794513'
    ).build<TCartDraft>();

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
          "firstName": "Sample Customer",
          "id": undefined,
          "key": undefined,
          "lastName": "USA",
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
        "customerEmail": "samplecustomer.usa@example.com",
        "customerGroup": undefined,
        "customerId": "9b3ea3f7-9858-4dc5-bf5c-9ac66e794513",
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": undefined,
        "itemShippingAddresses": undefined,
        "key": "sample-usa-01-cart",
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
          "firstName": "Sample Customer",
          "id": undefined,
          "key": undefined,
          "lastName": "USA",
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
        "shippingMethod": {
          "key": "shipping-usa-australia",
          "typeId": "shipping-method",
        },
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": undefined,
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });

  it('without customer ID, should return a cart discount draft', () => {
    const cartDraft = sampleUsa01().build<TCartDraft>();

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
          "firstName": "Sample Customer",
          "id": undefined,
          "key": undefined,
          "lastName": "USA",
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
        "customerEmail": "samplecustomer.usa@example.com",
        "customerGroup": undefined,
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": undefined,
        "itemShippingAddresses": undefined,
        "key": "sample-usa-01-cart",
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
          "firstName": "Sample Customer",
          "id": undefined,
          "key": undefined,
          "lastName": "USA",
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
        "shippingMethod": {
          "key": "shipping-usa-australia",
          "typeId": "shipping-method",
        },
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
    const cartDraft = sampleUsa01(
      '9b3ea3f7-9858-4dc5-bf5c-9ac66e794513'
    ).buildGraphql<TCartDraft>();

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
          "firstName": "Sample Customer",
          "id": undefined,
          "key": undefined,
          "lastName": "USA",
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
        "customerEmail": "samplecustomer.usa@example.com",
        "customerGroup": undefined,
        "customerId": "9b3ea3f7-9858-4dc5-bf5c-9ac66e794513",
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": undefined,
        "itemShippingAddresses": undefined,
        "key": "sample-usa-01-cart",
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
          "firstName": "Sample Customer",
          "id": undefined,
          "key": undefined,
          "lastName": "USA",
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
        "shippingMethod": {
          "__typename": "Reference",
          "key": "shipping-usa-australia",
          "typeId": "shipping-method",
        },
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
