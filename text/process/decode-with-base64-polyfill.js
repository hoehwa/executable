#!/usr/bin/env node

const process = require('process');

const atob = str => Buffer.from(str, 'base64').toString('binary');


try {
  console.log(
    atob(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
