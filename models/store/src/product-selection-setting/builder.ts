import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateProductSelectionSettingBuilder,
  TProductSelectionSetting,
} from './types';

const Model: TCreateProductSelectionSettingBuilder = () =>
  Builder<TProductSelectionSetting>({
    generator,
    transformers,
  });

export default Model;
