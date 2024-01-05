#!/usr/bin/env node

const process = require('process');

const extendHex = shortHex =>
  '#' +
  shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');

try {
  console.log(
    extendHex(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}



