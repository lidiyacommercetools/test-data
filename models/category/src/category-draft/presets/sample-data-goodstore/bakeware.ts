import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import dinnerware from './dinnerware';

const dinnerwareDraft = dinnerware().build<TCategoryDraft>();

const bakeware = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Bakeware')
        ['de-DE']('Backgeschirr')
    )
    .slug(
      LocalizedString.presets.empty()['en-GB']('bakeware')['de-DE']('bakeware')
    )
    .key('bakeware')
    .key('.42')
    .parent(KeyReference.presets.category().key(dinnerwareDraft.key!));

export default bakeware;