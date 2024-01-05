#!/usr/bin/env node

const process = require('process');

const sortCharactersInString = str =>
  [...str].sort((a, b) => a.localeCompare(b)).join('');

try {
  console.log(
    sortCharactersInString(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
