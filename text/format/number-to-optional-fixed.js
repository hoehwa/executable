#!/usr/bin/env node

const process = require('process');

const toOptionalFixed = (num, digits) =>
  `${Number.parseFloat(num.toFixed(digits))}`;

try {
  console.log(
    toOptionalFixed(
      process.argv[2],
      process.argv[3]
    )
  );
} catch (err) {
  console.error(err.message)
}



