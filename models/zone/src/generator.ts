import { sequence, fake, Generator } from '@commercetools-test-data/core';
import { TZone } from './types';
import { ClientLogging } from '@commercetools-test-data/commons';
import { createRelatedDates } from '@commercetools-test-data/utils';

//https://docs.commercetools.com/api/projects/zones#zone

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TZone>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    name: fake((f) => f.lorem.words(2)),
    description: fake((f) => f.lorem.sentence()),
    locations: fake((f) => [{ country: f.address.countryCode() }]),
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
