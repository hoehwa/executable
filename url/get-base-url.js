#!/usr/bin/env node

const process = require('process');

const getBaseURL = url => url.replace(/[?#].*$/, '');

try {
  console.log(
    getBaseURL(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}


