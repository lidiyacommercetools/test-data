import type { TCustomerDraft, TCustomerDraftGraphql } from '../../../types';
import sebastianSmith from './sebastian-smith';

describe('with the customer preset `sebastianSmith`', () => {
  it('should return a draft when built for Default', () => {
    const customer = sebastianSmith().build<TCustomerDraft>();

    expect(customer).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": undefined,
            "building": undefined,
            "city": "Fareham",
            "company": undefined,
            "country": "GB",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Sebastian",
            "id": undefined,
            "key": undefined,
            "lastName": "Smith",
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "PO167GZ",
            "region": undefined,
            "salutation": undefined,
            "state": undefined,
            "streetName": "Center Street",
            "streetNumber": "1",
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
        "email": "seb@example.uk",
        "externalId": undefined,
        "firstName": "Sebastian",
        "isEmailVerified": undefined,
        "key": "sebastian-smith",
        "lastName": "Smith",
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
    const customer = sebastianSmith().build<TCustomerDraft>();

    expect(customer).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": undefined,
            "building": undefined,
            "city": "Fareham",
            "company": undefined,
            "country": "GB",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Sebastian",
            "id": undefined,
            "key": undefined,
            "lastName": "Smith",
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "PO167GZ",
            "region": undefined,
            "salutation": undefined,
            "state": undefined,
            "streetName": "Center Street",
            "streetNumber": "1",
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
        "email": "seb@example.uk",
        "externalId": undefined,
        "firstName": "Sebastian",
        "isEmailVerified": undefined,
        "key": "sebastian-smith",
        "lastName": "Smith",
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
    const customer = sebastianSmith().build<TCustomerDraftGraphql>();

    expect(customer).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": undefined,
            "building": undefined,
            "city": "Fareham",
            "company": undefined,
            "country": "GB",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Sebastian",
            "id": undefined,
            "key": undefined,
            "lastName": "Smith",
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "PO167GZ",
            "region": undefined,
            "salutation": undefined,
            "state": undefined,
            "streetName": "Center Street",
            "streetNumber": "1",
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
        "email": "seb@example.uk",
        "externalId": undefined,
        "firstName": "Sebastian",
        "isEmailVerified": undefined,
        "key": "sebastian-smith",
        "lastName": "Smith",
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