import { fake, Generator } from '@commercetools-test-data/core';
import { TImage } from './types';

// https://docs.commercetools.com/api/projects/products#image

const generator = Generator<TImage>({
  fields: {
    label: fake((f) => f.lorem.slug(2)),
    url: fake((f) => f.image.abstract()),
    dimensions: {
      w: fake((f) => f.datatype.number({ min: 150, max: 300 })),
      h: fake((f) => f.datatype.number({ min: 150, max: 300 })),
    },
  },
});

export default generator;
