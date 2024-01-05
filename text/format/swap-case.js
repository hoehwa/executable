#!/usr/bin/env node

const process = require('process');

const swapCase = str =>
  [...str]
    .map(c => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
    .join('');

try {
  console.log(
    mask(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}



