import type { TCustomerDraft, TCustomerDraftGraphql } from '../../../types';
import jenniferJones from './jennifer-jones';

describe('with the customer preset `jenniferJones`', () => {
  it('should return a draft when built for Default', () => {
    const customer = jenniferJones().build<TCustomerDraft>();

    expect(customer).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": undefined,
            "building": undefined,
            "city": "Westminster",
            "company": undefined,
            "country": "GB",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Jennifer",
            "id": undefined,
            "key": undefined,
            "lastName": "Jones",
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "SW1A2AA",
            "region": undefined,
            "salutation": undefined,
            "state": undefined,
            "streetName": "Main Road",
            "streetNumber": "100",
            "title": undefined,
          },
        ],
        "anonymousCart": undefined,
        "anonymousId": undefined,
        "authenticationMode": "Password",
        "billingAddresses": undefined,
        "companyName": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "customerNumber": undefined,
        "dateOfBirth": undefined,
        "defaultBillingAddress": undefined,
        "defaultShippingAddress": undefined,
        "email": "jen@example.uk",
        "externalId": undefined,
        "firstName": "Jennifer",
        "isEmailVerified": undefined,
        "key": "jennifer-jones",
        "lastName": "Jones",
        "locale": undefined,
        "middleName": undefined,
        "password": "123",
        "salutation": undefined,
        "shippingAddresses": undefined,
        "stores": undefined,
        "title": undefined,
        "vatId": undefined,
      }
    `);
  });

  it('should return a draft when built for Rest', () => {
    const customer = jenniferJones().build<TCustomerDraft>();

    expect(customer).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": undefined,
            "building": undefined,
            "city": "Westminster",
            "company": undefined,
            "country": "GB",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Jennifer",
            "id": undefined,
            "key": undefined,
            "lastName": "Jones",
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "SW1A2AA",
            "region": undefined,
            "salutation": undefined,
            "state": undefined,
            "streetName": "Main Road",
            "streetNumber": "100",
            "title": undefined,
          },
        ],
        "anonymousCart": undefined,
        "anonymousId": undefined,
        "authenticationMode": "Password",
        "billingAddresses": undefined,
        "companyName": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "customerNumber": undefined,
        "dateOfBirth": undefined,
        "defaultBillingAddress": undefined,
        "defaultShippingAddress": undefined,
        "email": "jen@example.uk",
        "externalId": undefined,
        "firstName": "Jennifer",
        "isEmailVerified": undefined,
        "key": "jennifer-jones",
        "lastName": "Jones",
        "locale": undefined,
        "middleName": undefined,
        "password": "123",
        "salutation": undefined,
        "shippingAddresses": undefined,
        "stores": undefined,
        "title": undefined,
        "vatId": undefined,
      }
    `);
  });

  it('should return a draft when built for GraphQL', () => {
    const customer = jenniferJones().build<TCustomerDraftGraphql>();

    expect(customer).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": undefined,
            "building": undefined,
            "city": "Westminster",
            "company": undefined,
            "country": "GB",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Jennifer",
            "id": undefined,
            "key": undefined,
            "lastName": "Jones",
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "SW1A2AA",
            "region": undefined,
            "salutation": undefined,
            "state": undefined,
            "streetName": "Main Road",
            "streetNumber": "100",
            "title": undefined,
          },
        ],
        "anonymousCart": undefined,
        "anonymousId": undefined,
        "authenticationMode": "Password",
        "billingAddresses": undefined,
        "companyName": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "customerNumber": undefined,
        "dateOfBirth": undefined,
        "defaultBillingAddress": undefined,
        "defaultShippingAddress": undefined,
        "email": "jen@example.uk",
        "externalId": undefined,
        "firstName": "Jennifer",
        "isEmailVerified": undefined,
        "key": "jennifer-jones",
        "lastName": "Jones",
        "locale": undefined,
        "middleName": undefined,
        "password": "123",
        "salutation": undefined,
        "shippingAddresses": undefined,
        "stores": undefined,
        "title": undefined,
        "vatId": undefined,
      }
    `);
  });
});
