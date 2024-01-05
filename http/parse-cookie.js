#!/usr/bin/env node

const process = require('process');

const parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

try {
  console.log(
    parseCookie(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
