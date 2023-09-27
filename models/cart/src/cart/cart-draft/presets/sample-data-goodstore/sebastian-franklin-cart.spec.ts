import { TCartDraft } from '../../../types';
import sebastianFranklinCart from './sebastian-franklin-cart';

describe('with the preset cart `sebastianFranklinCart`', () => {
  it('should return a cart draft', () => {
    const cartDraft = sebastianFranklinCart().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('without customer ID, should return a cart draft', () => {
    const cartDraft = sebastianFranklinCart().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('should return a cart draft when build for GraphQL', () => {
    const cartDraft = sebastianFranklinCart().buildGraphql<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });
});
