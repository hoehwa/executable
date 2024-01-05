#!/usr/bin/env node

const process = require('process');

const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const replaceAll = (str, subStr, newSubStr) =>
  str.replace(new RegExp(escapeRegExp(subStr), 'g'), newSubStr);

try {
  console.log(
    replaceAll(
      process.argv[2],
      process.argv[3], // pattern
      process.argv[4], // replacement
    )
  );
} catch (err) {
  console.error(err.message)
}
