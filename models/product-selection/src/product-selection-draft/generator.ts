import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TProductSelectionDraft } from '../types';

//https://docs.commercetools.com/api/projects/product-selections#productselectiondraft

const generator = Generator<TProductSelectionDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedString.random()),
    mode: oneOf('Individual', 'IndividualExclusion'),
    custom: null,
  },
});

export default generator;
