# @commercetools-test-data/product-data

This package provides the data model for the commercetools platform `ProductData` type

https://docs.commercetools.com/api/projects/products#productdata

# Install

```bash
$ yarn add -D @commercetools-test-data/product-data
```

# Usage

```ts
import type { TProductData } from '@commercetools-test-data/product-data';
import * as ProductData from '@commercetools-test-data/product-data';

// For REST entities
const productDataRest = ProductData.random().buildRest<TProductData>();

// For Graphql entities
const productDataGraphql = ProductData.random().buildGraphql<TProductData>();
```