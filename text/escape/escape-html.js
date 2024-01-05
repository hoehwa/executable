#!/usr/bin/env node

const process = require('process');

const escapeHTML = str =>
  str.replace(
    /[&<>'"]/g,
    tag =>
    ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
try {
  console.log(
    escapeHTML(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
