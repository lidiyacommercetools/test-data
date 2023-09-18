import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

const furniture = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets.empty()['en-GB']('Furniture')['de-DE']('Möbel')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('furniture')
        ['de-DE']('furniture')
    )
    .key('furniture')
    .key('0.2');

export default furniture;
