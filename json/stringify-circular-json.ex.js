#!/usr/bin/env node

const stringifyCircularJSON = obj => {
  const seen = new WeakSet();
  return JSON.stringify(obj, (k, v) => {
    if (v !== null && typeof v === 'object') {
      if (seen.has(v)) return;
      seen.add(v);
    }
    return v;
  });
};

const obj = { n: 42 };
obj.obj = obj;
console.log(stringifyCircularJSON(obj)); // '{"n": 42}'


