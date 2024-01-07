#!/usr/bin/env node

const process = require('process');

const deepGet = (obj, keys) =>
  keys.reduce(
    (xs, x) => (xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : null),
    obj
  );

try {
  console.log(
    deepGet(
	  process.argv[2],
	  process.argv[3]
    )
  );
} catch (err) {
  console.error(err.message)
}