import { TCartDraft } from '../../../types';
import johnDoe01 from './john-doe-01';

describe('with the preset cart `johnDoe01`', () => {
  it('should return a cart discount draft', () => {
    const cartDraft = johnDoe01().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Center Town",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "John",
          "id": undefined,
          "key": undefined,
          "lastName": "Doe",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "34567",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Center Road",
          "streetNumber": "1",
          "title": undefined,
        },
        "businessUnit": undefined,
        "country": "AU",
        "currency": "AUD",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "john.doe@example.com",
        "customerGroup": {
          "key": "employee",
          "typeId": "customer-group",
        },
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": undefined,
        "itemShippingAddresses": undefined,
        "key": "john-01-cart",
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
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "148096",
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
          "city": "Center Town",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "John",
          "id": undefined,
          "key": undefined,
          "lastName": "Doe",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "34567",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Center Road",
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
    const cartDraft = johnDoe01().buildGraphql<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Center Town",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "John",
          "id": undefined,
          "key": undefined,
          "lastName": "Doe",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "34567",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Center Road",
          "streetNumber": "1",
          "title": undefined,
        },
        "businessUnit": undefined,
        "country": "AU",
        "currency": "AUD",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "john.doe@example.com",
        "customerGroup": {
          "__typename": "Reference",
          "key": "employee",
          "typeId": "customer-group",
        },
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": undefined,
        "itemShippingAddresses": undefined,
        "key": "john-01-cart",
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
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "148096",
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
          "city": "Center Town",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "John",
          "id": undefined,
          "key": undefined,
          "lastName": "Doe",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "34567",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Center Road",
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
