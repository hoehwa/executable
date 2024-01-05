#!/usr/bin/env node

const process = require('process');

const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);

try {
  console.log(
    isAbsoluteURL(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}


