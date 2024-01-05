#!/usr/bin/env node

const process = require('process');

const replaceLast = (str, pattern, replacement) => {
  const match =
    typeof pattern === 'string'
      ? pattern
      : (str.match(new RegExp(pattern.source, 'g')) || []).slice(-1)[0];
  if (!match) return str;
  const last = str.lastIndexOf(match);
  return last !== -1
    ? `${str.slice(0, last)}${replacement}${str.slice(last + match.length)}`
    : str;
};

try {
  console.log(
    replaceLast(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
