import type { TCustomerDraft, TCustomerDraftGraphql } from '../../../types';
import sebastianMuller from './sebastian-muller';

describe('with the customer preset `sebastianMuller`', () => {
  it('should return a draft when built for Default', () => {
    const customer = sebastianMuller().build<TCustomerDraft>();

    expect(customer).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": undefined,
            "building": undefined,
            "city": "München",
            "company": undefined,
            "country": "DE",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Sebastian",
            "id": undefined,
            "key": undefined,
            "lastName": "Müller",
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "80331",
            "region": undefined,
            "salutation": undefined,
            "state": undefined,
            "streetName": "Schulstrasse",
            "streetNumber": "12",
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
        "email": "seb@example.de",
        "externalId": undefined,
        "firstName": "Sebastian",
        "isEmailVerified": undefined,
        "key": "sebastian-mueller",
        "lastName": "Müller",
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
    const customer = sebastianMuller().build<TCustomerDraft>();

    expect(customer).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": undefined,
            "building": undefined,
            "city": "München",
            "company": undefined,
            "country": "DE",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Sebastian",
            "id": undefined,
            "key": undefined,
            "lastName": "Müller",
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "80331",
            "region": undefined,
            "salutation": undefined,
            "state": undefined,
            "streetName": "Schulstrasse",
            "streetNumber": "12",
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
        "email": "seb@example.de",
        "externalId": undefined,
        "firstName": "Sebastian",
        "isEmailVerified": undefined,
        "key": "sebastian-mueller",
        "lastName": "Müller",
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
    const customer = sebastianMuller().build<TCustomerDraftGraphql>();

    expect(customer).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": undefined,
            "building": undefined,
            "city": "München",
            "company": undefined,
            "country": "DE",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Sebastian",
            "id": undefined,
            "key": undefined,
            "lastName": "Müller",
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "80331",
            "region": undefined,
            "salutation": undefined,
            "state": undefined,
            "streetName": "Schulstrasse",
            "streetNumber": "12",
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
        "email": "seb@example.de",
        "externalId": undefined,
        "firstName": "Sebastian",
        "isEmailVerified": undefined,
        "key": "sebastian-mueller",
        "lastName": "Müller",
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