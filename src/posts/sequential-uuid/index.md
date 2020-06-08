---
title: How to make uuid sequential in javascript
description: In this post I explain how to create an function to obtain unique identifiers that are always sequentials
date: 2020-06-07T22:40:41.751Z
tags: [javascript, typescript]
keywords: [javascript, typescript, uuid, unique identifier, sequential]
---

Arguably the best way to generate an unique key is to use universal unique identifier. I can cite at least four main arguments for using it, first it is an stardart, second it has native database, third it is garanteed to be unique and last it is asynchronous safe, you don't need to update and keep track of the last identifier generated.

One downside of universal unique identifiers are that it's values doesn't seem to follow any particular order, so databases may struggle trying to store uuid as primary keys.

To solve this I will show you how to create an simple javascript module to generate uuid that are always in sequence.

First, we need an way to generate normal unique identifiers. Open up a terminal and install uuid package from npm.

```bash
yarn add uuid
# or npm i uuid
```

Create an javascript an file named sequentialUuid.js, that will be our module, add the following lines

```javascript{1,20}{numberLines: true}
import { v1 } from 'uuid';

export const sequentialUuid = (() => {
  const uuid = v1;

  const swap = (uuid) =>
    uuid.slice(14, 18) +
    uuid.slice(9, 13) +
    '-' +
    uuid.slice(0, 4) +
    '-' +
    uuid.slice(4, 8) +
    '-' +
    uuid.slice(19, 23) +
    '-' +
    uuid.slice(24);

  return () => swap(uuid());
})();
```

Now we just need to test if it works as intended, create an temporary index.js file in the same directory and add the following lines

```javascript
import { sequentialUuid } from './sequentialUuid';

for (let i = 0; i < 20; i += 1) {
  console.log(sequentialUuid());
}
```

Install the following packages to run ES+ javascript from your terminal

```bash
yarn add @babel/core @babel/node @babel/preset-env
# or npm i @babel/core @babel/node @babel/preset-env
```

Run the index.js file

```bash
yarn babel-node --presets @babel/preset-env index.js
# or ./node_modules/.bin/babel-node --presets @babel/preset-env index.js
```

Check the terminal, you will see printed 20 uuid that are sequential.

```markup
11eaa8fb-1e53-af80-a1d6-0d74e5510111
11eaa8fb-1e53-d690-a1d6-0d74e5510111
...
11eaa8fb-1e53-fda7-a1d6-0d74e5510111
11eaa8fb-1e53-fda8-a1d6-0d74e5510111
```

Try running it asynchronous, it will maintain the sequence

```javascript
import { sequentialUuid } from './sequentialUuid';

const print = async (x) => {
  for (let i = 0; i < 20; i += 1) {
    setTimeout(() => console.log(sequentialUuid(), x), 10 + Math.random() * 50);
  }
};

for (let i = 0; i < 20; i += 1) {
  print(i);
}
```

You can check the terminal, it's still in sequence

```markup
11eaa8fb-1e53-af80-a1d6-0d74e5510111
11eaa8fb-1e53-d690-a1d6-0d74e5510111
...
11eaa8fb-1e53-fda7-a1d6-0d74e5510111
11eaa8fb-1e53-fda8-a1d6-0d74e5510111
```

The tradeoff this methods has are that it uses the version 1 of uuid, which exposes hardware information, so you can know where this uuid was generated, the other downside is that it's easy to guess the values of the next uuid once you know one of them, by look at how the pattern of change works, so you shouldn't use it to store access keys, secrets or any sensitive information.

You can get the gist of everything done in this post at <a href="https://gist.github.com/eliseuvideira/7cfaef26ae20d1ea4bea01d2c393d7b4" rel="noopener" target="_blank">https://gist.github.com/eliseuvideira/7cfaef26ae20d1ea4bea01d2c393d7b4</a>
