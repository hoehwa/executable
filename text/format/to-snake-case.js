#!/usr/bin/env node

const process = require('process');

const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

try {
  console.log(
    toSnakeCase(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}



