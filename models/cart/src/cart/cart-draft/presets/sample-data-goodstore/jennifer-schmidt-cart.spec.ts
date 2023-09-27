import { TCartDraft } from '../../../types';
import jenniferSchmidtCart from './jennnifer-schmidt-cart';

describe('with the preset cart `jenniferSchmidtCart`', () => {
  it('should return a cart draft', () => {
    const cartDraft = jenniferSchmidtCart().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('without customer ID, should return a cart draft', () => {
    const cartDraft = jenniferSchmidtCart().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('should return a cart draft when build for GraphQL', () => {
    const cartDraft = jenniferSchmidtCart().buildGraphql<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });
});
