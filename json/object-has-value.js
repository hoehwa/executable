#!/usr/bin/env node

const process = require('process');

const hasValue = (obj, value) => Object.values(obj).includes(value);

try {
  hasValue(
    process.argv[2], // javascript object 
    process.argv[3], // a key.
  );
} catch (err) {
  console.error(err.message)
}