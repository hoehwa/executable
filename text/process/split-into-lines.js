#!/usr/bin/env node

const process = require('process');

const splitLines = str => str.split(/\r?\n/);

try {
  console.log(
    splitLines(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
