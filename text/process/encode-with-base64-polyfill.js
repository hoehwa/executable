#!/usr/bin/env node

const process = require('process');

const btoa = str => Buffer.from(str, 'binary').toString('base64');


try {
  console.log(
    btoa(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
