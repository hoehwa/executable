#!/usr/bin/env node

const process = require('process');

const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

try {
  console.log(
    stripHTMLTags(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
