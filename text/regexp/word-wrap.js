#!/usr/bin/env node

const process = require('process');

const wordWrap = (str, max, br = '\n') => str.replace(
  new RegExp(`(?![^\\n]{1,${max}}$)([^\\n]{1,${max}})\\s`, 'g'), '$1' + br
);

try {
  console.log(
    wordWrap(
      process.argv[2],
      process.argv[3],
      process.argv[4]
    )
  );
} catch (err) {
  console.error(err.message)
}
