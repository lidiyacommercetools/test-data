import type { TReference } from '../../types';
import inventoryEntryReference from './inventory-entry-reference';

it('should build an inventory-entry reference', () => {
  const built =
    inventoryEntryReference().build<TReference<'inventory-entry'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'inventory-entry',
  });
});
