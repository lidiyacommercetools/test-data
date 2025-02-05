# @commercetools-test-data/product-variant

This package provides the data model for the commercetools platform `ProductVariant` type representations

https://docs.commercetools.com/api/projects/products#productvariant

# Install

```bash
$ pnpm add -D @commercetools-test-data/product-variant
```

# Usage

## ProductVariant

```ts
import {
  ProductVariant,
  ProductVariantDraft,
  type TProductVariant,
  type TProductVariantDraft,
} from '@commercetools-test-data/product-variant';

const productVariant = ProductVariant.random().build<TProductVariant>();
const productVariantDraft =
  ProductVariantDraft.random().build<TProductVariantDraft>();
```

## Image

```ts
import { Image, type TImage } from '@commercetools-test-data/product-variant';

const image = Image.random().build<TImage>();
```

## Attribute

```ts
import {
  Attribute,
  AttributeDraft,
  type TAttribute,
  type TAttributeDraft,
} from '@commercetools-test-data/product-variant';

const attribute = Attribute.random().build<TAttribute>();
const attributeDraftGraphql =
  AttributeDraft.random().buildGraphql<TAttributeDraft>();
```
