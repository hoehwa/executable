#!/usr/bin/env node

const process = require('process');

const isEmailValid = address => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address);

try {
  console.log(
    isEmailValid(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}




