#!/usr/bin/env node

const process = require('process');

const serializeCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

try {
  console.log(
    serializeCookie(
      process.argv[2],
      process.argv[3]
    )
  );
} catch (err) {
  console.error(err.message)
}
