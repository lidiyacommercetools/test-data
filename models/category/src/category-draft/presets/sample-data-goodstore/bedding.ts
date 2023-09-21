import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import homeDecor from './home-decor';

const homeDecorDraft = homeDecor().build<TCategoryDraft>();

const bedding = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets.empty()['en-GB']('Bedding')['de-DE']('Bettwäsche')
    )
    .slug(
      LocalizedString.presets.empty()['en-GB']('bedding')['de-DE']('bettwsche')
    )
    .key('bedding')
    .key('.5')
    .parent(KeyReference.presets.category().key(homeDecorDraft.key!));

export default bedding;