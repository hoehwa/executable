#!/usr/bin/env node

const process = require('process');

const toSentenceCase = str => {
  const s =
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .join(' ');
  return s.slice(0, 1).toUpperCase() + s.slice(1);
};

try {
  console.log(
    toSentenceCase(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}



