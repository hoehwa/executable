#!/usr/bin/env node

const process = require('process');

const isUpperCase = str => str === str.toUpperCase();

try {
  console.log(
    isUpperCase(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}


