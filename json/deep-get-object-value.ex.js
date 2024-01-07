#!/usr/bin/env node
const deepGet = (obj, keys) =>
  keys.reduce(
    (xs, x) => (xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : null),
    obj
  );

let index = 2;
const data = {
  foo: {
    foz: [1, 2, 3],
    bar: {
      baz: ['a', 'b', 'c']
    }
  }
};

console.log("Example 1")
console.log(deepGet(data, ['foo', 'foz', index])); // get 3
console.log("\n")

console.log("Example 1")
console.log(deepGet(data, ['foo', 'bar', 'baz', 8, 'foz'])); // null