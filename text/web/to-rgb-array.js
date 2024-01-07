#!/usr/bin/env node

const process = require('process');

const toRGBArray = rgbStr => rgbStr.match(/\d+/g).map(Number);

try {
  console.table(
    toRGBArray(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}



