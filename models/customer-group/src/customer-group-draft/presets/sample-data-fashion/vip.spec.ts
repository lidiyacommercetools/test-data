import {
  TCustomerGroupDraft,
  TCustomerGroupDraftGraphql,
} from '../../../types';
import vip from './vip';

describe('with the preset `vip`', () => {
  it('should return a customer group draft with name `VIP`', () => {
    const customerGroup = vip().build<TCustomerGroupDraft>();

    expect(customerGroup.key).toMatchInlineSnapshot(`"vip"`);
    expect(customerGroup.groupName).toMatchInlineSnapshot(`"VIP"`);
  });

  it('should return a customer group draft with name `VIP` when built for GraphQL', () => {
    const customerGroup = vip().buildGraphql<TCustomerGroupDraftGraphql>();

    expect(customerGroup.key).toMatchInlineSnapshot(`"vip"`);
    expect(customerGroup.groupName).toMatchInlineSnapshot(`"VIP"`);
  });
});
