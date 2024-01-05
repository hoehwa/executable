#!/usr/bin/env node

const process = require('process');

const normalizeLineEndings = (str, normalized = '\r\n') =>
  str.replace(/\r?\n/g, normalized);

try {
  console.log(
    normalizeLineEndings(
      process.argv[2],
      process.argv[3]
    )
  );
} catch (err) {
  console.error(err.message)
}
