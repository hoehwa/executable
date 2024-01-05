#!/usr/bin/env node

const process = require('process');

const capitalizeEveryWord = str =>
  str.replace(/\b[a-z]/g, char => char.toUpperCase());

try {
  console.log(
    capitalizeEveryWord(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
