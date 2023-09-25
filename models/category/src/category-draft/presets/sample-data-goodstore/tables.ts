import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import livingRoomFurniture from './living-room-furniture';

const livingRoomFurnitureDraft = livingRoomFurniture().build<TCategoryDraft>();

const tables = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Tables')
        ['de-DE']('Tische')
        ['en-US']('Tables')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('living-room-tables')
        ['de-DE']('coffee-tables')
        ['en-US']('living-room-tables')
    )
    .key('tables')
    .orderHint('.25')
    .parent(KeyReference.presets.category().key(livingRoomFurnitureDraft.key!));

export default tables;
