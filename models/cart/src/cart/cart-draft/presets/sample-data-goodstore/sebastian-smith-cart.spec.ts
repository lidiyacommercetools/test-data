import { TCartDraft } from '../../../types';
import sebastianSmithCart from './sebastian-smith-cart';

describe('with the preset cart `sebastianSmithCart`', () => {
  it('should return a cart draft', () => {
    const cartDraft = sebastianSmithCart().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('without customer ID, should return a cart draft', () => {
    const cartDraft = sebastianSmithCart().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('should return a cart draft when build for GraphQL', () => {
    const cartDraft = sebastianSmithCart().buildGraphql<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });
});
