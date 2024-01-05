#!/usr/bin/env node

const process = require('process');

const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

try {
  console.log(
    slugify(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
