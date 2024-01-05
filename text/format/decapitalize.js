#!/usr/bin/env node

const process = require('process');

const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() +
  (upperRest ? rest.join('').toUpperCase() : rest.join(''));

try {
  console.log(
    decapitalize(
      process.argv[2],
      process.argv[3]
    )
  );
} catch (err) {
  console.error(err.message)
}



