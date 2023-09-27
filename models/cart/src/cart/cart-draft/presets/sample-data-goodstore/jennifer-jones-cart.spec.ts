import { TCartDraft } from '../../../types';
import jenniferJonesCart from './jennifer-jones-cart';

describe('with the preset cart `jenniferJonesCart`', () => {
  it('should return a cart draft', () => {
    const cartDraft = jenniferJonesCart().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('without customer ID, should return a cart draft', () => {
    const cartDraft = jenniferJonesCart().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('should return a cart draft when build for GraphQL', () => {
    const cartDraft = jenniferJonesCart().buildGraphql<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });
});
