#!/usr/bin/env node

const process = require('process');

const toHSLArray = hslStr => hslStr.match(/\d+/g).map(Number);

try {
  console.table(
    toHSLArray(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
