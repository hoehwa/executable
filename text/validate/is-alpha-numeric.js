#!/usr/bin/env node

const process = require('process');

const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str);

try {
  console.log(
    isAlphaNumeric(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}


