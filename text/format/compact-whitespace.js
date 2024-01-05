#!/usr/bin/env node

const process = require('process');

const compactWhitespace = str => str.replace(/\s{2,}/g, ' ');

try {
  console.log(
    compactWhitespace(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}



