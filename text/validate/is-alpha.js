#!/usr/bin/env node

const process = require('process');

const isAlpha = str => /^[a-zA-Z]*$/.test(str);

try {
  console.log(
    isAlpha(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}


