#!/usr/bin/env node

const process = require('process');

const isEmpty = val => val == null || !(Object.keys(val) || val).length;

try {
  console.log(
    isEmpty(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}




