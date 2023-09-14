import * as TaxRateDraft from '../../../../tax-rate/tax-rate-draft';
import * as TaxCategoryDraft from '../../index';

const EU2TaxCategory = () =>
  TaxCategoryDraft.presets
    .empty()
    .key('EU2')
    .name('EU2')
    .rates([
      TaxRateDraft.presets
        .empty()
        .name('Germany')
        .amount(0.1)
        .includedInPrice(true)
        .country('DE'),
      TaxRateDraft.presets
        .empty()
        .name('United Kingdom')
        .amount(0.1)
        .includedInPrice(true)
        .country('GB'),
    ])
export default EU2TaxCategory;
