#!/usr/bin/env node

const process = require('process');

const isLowerCase = str => str === str.toLowerCase();

try {
  console.log(
    isLowerCase(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}


