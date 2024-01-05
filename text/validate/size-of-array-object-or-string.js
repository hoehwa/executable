#!/usr/bin/env node

const process = require('process');

const size = val =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === 'object'
      ? val.size || val.length || Object.keys(val).length
      : typeof val === 'string'
        ? new Blob([val]).size
        : 0;

try {
  console.log(
    size(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}


