import { Transformer, buildField } from '@commercetools-test-data/core';
import { TAttributeDefinitionGraphql } from '../attribute-definition';
import type { TProductType, TProductTypeGraphql } from './types';

const transformers = {
  default: Transformer<TProductType, TProductType>('default', {
    buildFields: ['attributes', 'createdBy', 'lastModifiedBy'],
  }),
  rest: Transformer<TProductType, TProductType>('rest', {
    buildFields: ['attributes', 'createdBy', 'lastModifiedBy'],
  }),
  graphql: Transformer<TProductType, TProductTypeGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy'],
    addFields: ({ fields }) => ({
      __typename: 'ProductTypeDefinition',
      attributeDefinitions: {
        results: fields.attributes!.map((attribute) =>
          buildField(attribute, 'graphql')
        ) as Array<TAttributeDefinitionGraphql>,
        __typename: 'AttributeDefinitionResult',
      },
    }),
  }),
};

export default transformers;
