#!/usr/bin/env node

const hasValue = (obj, value) => Object.values(obj).includes(value);

const obj = { a: 100, b: 200 };

console.log(`hasValue(obj, 100): ${hasValue(obj, 100)}`); // true
console.log(`hasValue(obj, 999): ${hasValue(obj, 999)}`); // false