#!/usr/bin/env node

const process = require('process');

const URLJoin = (...args) =>
  args
    .join('/')
    .replace(/[\/]+/g, '/')
    .replace(/^(.+):\//, '$1://')
    .replace(/^file:/, 'file:/')
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/\?/g, '&')
    .replace('&', '?');

try {
  console.log(
    URLJoin(
      process.argv[2], // 'http://www.google.com'
      process.argv[3], // 'a'
      process.argv[4], // '/b/cd'
      process.argv[5], // '?foo=123'
      process.argv[6]  // '?bar=foo'
    )
  );
} catch (err) {
  console.error(err.message)
}



