#!/usr/bin/env node

const process = require('process');

const includesCaseInsensitive = (str, searchString) =>
  new RegExp(searchString, 'i').test(str);

try {
  console.log(
    includesCaseInsensitive(
      process.argv[2],
      process.argv[3]
    )
  );
} catch (err) {
  console.error(err.message)
}
