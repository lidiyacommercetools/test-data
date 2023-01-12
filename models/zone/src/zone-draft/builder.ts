import { Builder } from '@commercetools-test-data/core';
import type { TCreateZoneDraftBuilder, TZoneDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const ZoneDraft: TCreateZoneDraftBuilder = () =>
  Builder<TZoneDraft>({
    generator,
    transformers,
  });

export default ZoneDraft;
