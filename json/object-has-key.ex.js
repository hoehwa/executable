#!/usr/bin/env node

const hasKey = (obj, keys) => {
  return (
    keys.length > 0 &&
    keys.every(key => {
      if (typeof obj !== 'object' || !obj.hasOwnProperty(key)) return false;
      obj = obj[key];
      return true;
    })
  );
};

let obj = {
  a: 1,
  b: { c: 4 },
  'b.d': 5
};

console.log(`haskey(obj, ['a']): ${hasKey(obj, ['a'])}`); // true
console.log(`haskey(obj, ['b']): ${hasKey(obj, ['b'])}`); // true
console.log(`haskey(obj, ['b', 'c']): ${hasKey(obj, ['b', 'c'])}`); // true
console.log(`haskey(obj, ['b.d']): ${hasKey(obj, ['b.d'])}`); // true
console.log(`haskey(obj, ['d']): ${hasKey(obj, ['d'])}`); // false
console.log(`haskey(obj, ['c']): ${hasKey(obj, ['c'])}`); // false
console.log(`haskey(obj, ['b', 'f']): ${hasKey(obj, ['b', 'f'])}`); // false