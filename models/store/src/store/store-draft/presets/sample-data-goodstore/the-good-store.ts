import { LocalizedString } from '@commercetools-test-data/commons';
import type { TStoreDraftBuilder } from '../../../types';
import * as StoreDraft from '../../index';

const the_good_store = (): TStoreDraftBuilder =>
  StoreDraft.presets
    .empty()
    .key('the-good-store')
    .name(LocalizedString.presets.empty()['en-US']('The Good Store'))
    .name(LocalizedString.presets.empty()['en-GB']('The Good Store'));
export default the_good_store;
