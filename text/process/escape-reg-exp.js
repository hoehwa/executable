#!/usr/bin/env node

const process = require('process');

const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

try {
  console.log(
    escapeRegExp(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
