# @commercetools-test-data/utils

## 3.0.0

### Patch Changes

- [#113](https://github.com/commercetools/test-data/pull/113) [`1912f11`](https://github.com/commercetools/test-data/commit/1912f117609bd6c46e8bb1e748c159305af5b449) Thanks [@emmenko](https://github.com/emmenko)! - Refine models and types.

* [#99](https://github.com/commercetools/test-data/pull/99) [`583f3f1`](https://github.com/commercetools/test-data/commit/583f3f169f5e91ceaef13dda773a4de10831e449) Thanks [@emmenko](https://github.com/emmenko)! - Upgrade to Yarn v3

- [#107](https://github.com/commercetools/test-data/pull/107) [`67c1174`](https://github.com/commercetools/test-data/commit/67c11743b126faaf50705521684b8cb33d76b141) Thanks [@dogayuksel](https://github.com/dogayuksel)! - Replace deleted fakerjs library with the new community package (fakerjs.dev)

* [#112](https://github.com/commercetools/test-data/pull/112) [`e2f4089`](https://github.com/commercetools/test-data/commit/e2f40895f25d07b2223bd99dcb01410f356c3de1) Thanks [@emmenko](https://github.com/emmenko)! - Update dependencies

## 2.4.0

### Patch Changes

- [#72](https://github.com/commercetools/test-data/pull/72) [`46f5781`](https://github.com/commercetools/test-data/commit/46f57810f4b8761d91056402172d15817dbf236f) Thanks [@adnasa](https://github.com/adnasa)! - Add `models/category`, `utils/`

  \*\*Example usage of `models/category`

  ```ts
  import Category from '@commercetools-test-data/category';
  const category = Category.random().build();
  console.log(category);
  // {
  //   "id": <UUID>,
  //   "version": 1,
  //   "createdAt": "2018-12-19T21:31:56.346Z",
  //   "lastModifiedAt": "2019-09-24T10:04:20.946Z",
  //   "name": {
  //     "en": "Clothes"
  //   },
  //   "slug": {
  //     "en": "clothes"
  //   },
  //   "ancestors": [],
  //   "orderHint": "0.01",
  //   "assets": []
  // }
  ```

  \*\*Example usage of `createRelatedDates`

  ```ts
  import type { TCategory } from '@commercetools-test-data/category';
  import { createRelatedDates } from '@commercetools-test-data/utils';

  const [getOlderDate, getNewerDate] = createRelatedDates();
  const generator = Generator<TCategory>({
    fields: {
      createdAt: fake(getOlderDate),
      lastModifiedAt: fake(getNewerDate),
    },
  });
  ```