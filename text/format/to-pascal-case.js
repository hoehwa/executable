#!/usr/bin/env node

const process = require('process');

const toPascalCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join('');

try {
  console.log(
    toPascalCase(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}



