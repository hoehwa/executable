#!/usr/bin/env node

const process = require('process');

const palindrome = str => {
  const s = str.toLowerCase().replace(/[\W_]/g, '');
  return s === [...s].reverse().join('');
};

try {
  console.log(
    palindrome(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}


