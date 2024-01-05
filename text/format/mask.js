#!/usr/bin/env node

const process = require('process');

const mask = (cc, num = 4, mask = '*') =>
  `${cc}`.slice(-num).padStart(`${cc}`.length, mask);

try {
  console.log(
    mask(
      process.argv[2],
      process.argv[3],
      process.argv[4]
    )
  );
} catch (err) {
  console.error(err.message)
}



