import { TDiscountCodeDraftGraphql, TDiscountCodeDraft } from '../../../types';
import furnitureBogo from './furniture-bogo';

describe('with the preset `furnitureBogo`', () => {
  it('should return a discount code draft', () => {
    const discountCodeDraft = furnitureBogo(
      'my-cart-discount-id'
    ).build<TDiscountCodeDraft>();

    expect(discountCodeDraft).toMatchInlineSnapshot(`
      {
        "cartDiscounts": [
          {
            "id": "my-cart-discount-id",
            "typeId": "cart-discount",
          },
        ],
        "cartPredicate": undefined,
        "code": "BOGO",
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "fr": undefined,
        },
        "groups": [],
        "isActive": true,
        "maxApplications": 1,
        "maxApplicationsPerCustomer": 1,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-GB": "BOGO",
          "en-US": "BOGO",
          "fr": undefined,
        },
        "validFrom": undefined,
        "validUntil": undefined,
      }
    `);
  });

  it('should return a discount code draft when built for GraphQL', () => {
    const discountCodeDraft = furnitureBogo(
      'my-cart-discount-id'
    ).buildGraphql<TDiscountCodeDraftGraphql>();

    expect(discountCodeDraft).toMatchInlineSnapshot(`
      {
        "cartDiscounts": [
          {
            "__typename": "Reference",
            "id": "my-cart-discount-id",
            "typeId": "cart-discount",
          },
        ],
        "cartPredicate": undefined,
        "code": "BOGO",
        "custom": undefined,
        "description": [],
        "groups": [],
        "isActive": true,
        "maxApplications": 1,
        "maxApplicationsPerCustomer": 1,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "BOGO",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "BOGO",
          },
        ],
        "validFrom": undefined,
        "validUntil": undefined,
      }
    `);
  });
});
