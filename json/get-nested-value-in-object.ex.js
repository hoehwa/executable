#!/usr/bin/env node
const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
      if (acc !== undefined) return acc;
      if (typeof val === 'object') return dig(val, target);
    }, undefined);

const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};


console.log("Example 1")
console.log(dig(data, 'level3')); // 'some data'
console.log("\n")

console.log("Example 1")
console.log(dig(data, 'level4')); // undefined