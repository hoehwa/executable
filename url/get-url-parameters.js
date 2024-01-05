#!/usr/bin/env node

const process = require('process');

const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
    ),
    {}
  );

try {
  console.log(
    getURLParameters(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}


