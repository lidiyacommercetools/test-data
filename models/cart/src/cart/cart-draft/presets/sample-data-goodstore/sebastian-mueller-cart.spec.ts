import { TCartDraft } from '../../../types';
import sebastianMuellerCart from './sebastian-smith-cart';

describe('with the preset cart `sebastianMuellerCart`', () => {
  it('should return a cart draft', () => {
    const cartDraft = sebastianMuellerCart().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('without customer ID, should return a cart draft', () => {
    const cartDraft = sebastianMuellerCart().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('should return a cart draft when build for GraphQL', () => {
    const cartDraft = sebastianMuellerCart().buildGraphql<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });
});
