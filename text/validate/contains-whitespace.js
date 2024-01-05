#!/usr/bin/env node

const process = require('process');

const containsWhitespace = str => /\s/.test(str);

try {
  console.log(
    containsWhitespace(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}




