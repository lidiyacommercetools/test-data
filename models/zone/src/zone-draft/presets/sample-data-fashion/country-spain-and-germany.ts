import { TZoneDraftBuilder } from '../../../types';
import * as ZoneDraft from '../../index';

const withCountrySpainAndGermany = (): TZoneDraftBuilder =>
  ZoneDraft.presets
    .empty()
    .name('Europe')
    .key('europe')
    .locations([{ country: 'ES' }, { country: 'DE' }]);

export default withCountrySpainAndGermany;
